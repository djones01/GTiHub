using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System.IO;
using GTiHub.Models.EntityModel;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace GTiHub.API.File_Handling
{
    [Route("api/[controller]")]
    public class FileController : Controller
    {
        [Route("ExtractHeaders")]
        [HttpPost]
        public async Task<IActionResult> ExtractHeaders(IFormFile file)
        {
            if (file == null) throw new Exception("File is null");
            if (file.Length == 0) throw new Exception("File is empty");
            if (file.ContentType != "text/csv" && file.ContentType != "text/plain" && file.ContentType != "application/octet-stream" && file.ContentType != "application/vnd.ms-excel") return new UnsupportedMediaTypeResult();

            List<SourceField> sfields = new List<SourceField>();
            int sfieldSeqCount = 1;

            using(var reader = new StreamReader(file.OpenReadStream()))
            {
                string line = await reader.ReadLineAsync();
                string[] fields = line.Split(',');
                foreach (string field in fields)
                {
                    sfields.Add(new SourceField(field, "text", true, sfieldSeqCount++));
                }

            }  

            return new ObjectResult(sfields);    
        }

        [Route("RunMapping")]
        [HttpPost]
        public async Task<IActionResult> RunMapping(IFormCollection form)
        {
            if (!Request.ContentType.Contains("multipart/form-data"))
            {
                return new UnsupportedMediaTypeResult();
            }

            //Get the MappingID
            int mappingID = Convert.ToInt32(form["MappingID"]);
            //Get the list of sourceIds
            List<int> sourceIds = new List<int>();
            for(int i = 1; i < form.Keys.Count; ++i)
            {
                string key = "SourceID" + i.ToString();
                sourceIds.Add(Convert.ToInt32(form[key]));
            }


            return new NoContentResult();
        }
    }
}
