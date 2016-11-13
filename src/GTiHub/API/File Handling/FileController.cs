﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.IO;
using GTiHub.Models.EntityModel;
using System.Text;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using NCalc;

namespace GTiHub.API.File_Handling
{
    [Route("api/[controller]")]
    public class FileController : Controller
    {
        private ITransformHelpers _helpers;

        public FileController(ITransformHelpers _helpers)
        {
            this._helpers = _helpers;
        }

        [Route("ExtractHeaders")]
        [HttpPost]
        public async Task<IActionResult> ExtractHeaders(IFormCollection form)
        {
            if (!Request.ContentType.Contains("multipart/form-data"))
            {
                return new UnsupportedMediaTypeResult();
            }

            IFormFile file = form.Files[0];
            if (file == null) throw new Exception("File is null");
            if (file.Length == 0) throw new Exception("File is empty");
            if (file.ContentType != "text/csv" && file.ContentType != "text/plain" && file.ContentType != "application/octet-stream" && file.ContentType != "application/vnd.ms-excel") return new UnsupportedMediaTypeResult();

            List<SourceField> sfields = new List<SourceField>();
            int sfieldSeqCount = 1;

            try
            {
                using (var reader = new StreamReader(file.OpenReadStream()))
                {
                    var line = await reader.ReadLineAsync();

                    var delimiter = Convert.ToChar(form["delimiter"]);

                    var fields = line.Split(delimiter);
                    foreach (var field in fields)
                    {
                        sfields.Add(new SourceField(field, "text", true, sfieldSeqCount++));
                    }
                }
            }
            catch (Exception ex)
            {
            }

            return new ObjectResult(sfields);
        }

        [Route("RunMapping")]
        [HttpPost]
        public async Task<FileResult> RunMapping(IFormCollection form)
        {

            byte[] bytes = new byte[0];

            try
            {
                //Get form info
                var mapId = Convert.ToInt32(form["mapId"]);
                var evalConditions = Convert.ToBoolean(form["evalConditions"]);
                var outputDelimiter = form["outputDelimiter"];

                var success = false;

                Stopwatch stopwatch = Stopwatch.StartNew();
                //Get formatted data from the uploaded files
                var sourceTables = await Task.Run(() => _helpers.GetSourceTables(form));

                //Get list of transformations for map
                var transformations = await Task.Run(() => _helpers.GetMapTransformations(mapId));

                //Get the id of the primary source
                var primarySourceId = await Task.Run(() => _helpers.GetPrimarySourceId(ref form));

                //Get field counts for primary table
                var lineCount = sourceTables[primarySourceId].SourceVals.Length;
                var primaryFieldCount = sourceTables[primarySourceId].SourceFields.Count;

                //Get target tables
                var targetTables = await Task.Run(() => _helpers.GetTargetTables(ref transformations, primarySourceId, lineCount, primaryFieldCount));

                var targetId = targetTables.Keys.ToList()[0];

                //Apply transformations 
                success = await Task.Run(() => _helpers.TransformMapToFile(ref sourceTables, ref targetTables, ref transformations, primarySourceId, lineCount, primaryFieldCount, targetId, evalConditions));

                //Create new memory stream to return
                bytes = _helpers.GetTargetBytes(ref targetTables, targetId, outputDelimiter);

                stopwatch.Stop();

                //return result;    
            }
            catch (Exception ex)
            {
            }
            return File(bytes, "application/octet-stream", "test.csv");
        }
    }
}

