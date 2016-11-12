using GTiHub.API.File_Handling;
using GTiHub.Models.EntityModel;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using NCalc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GTiHub.API
{
    public interface ITransformHelpers
    {

    }

    public class TransformHelpers
    {
        private GTiHubContext dbContext;
        public TransformHelpers(GTiHubContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public byte[] GetTargetStream(ref Dictionary<int, TargetInfo> targetTables, int targetId, string outputDelimiter)
        {
            StringBuilder combined = new StringBuilder();
            TargetInfo targetInfo = targetTables[targetId];

            //Add headers
            string[] fieldList = new List<string>(targetTables[targetId].targetFields.Keys).ToArray();
            combined.AppendLine(string.Join(outputDelimiter, fieldList));

            //Add everything else
            for (int i = 0; i < targetInfo.targetVals.Length; i++)
            {
                combined.AppendLine(string.Join(outputDelimiter, targetInfo.targetVals[i]));
            }

            //Get byte array
            var bytes = System.Text.Encoding.UTF8.GetBytes(combined.ToString());

            return bytes;
            //return new MemoryStream(bytes);          
        }

        /// <summary>
        /// Transform a given set of source tables which have been read in by using the given transformations
        /// </summary>
        /// <param name="sourceTables">Arrays of source values and their associated Fields</param>
        /// <param name="transformations">Transformations to be applied to sources</param>
        /// <returns>Whether or not we were able to successfully transform the map</returns>
        public bool TransformMapToFile(ref Dictionary<int, SourceInfo> sourceTables,
            ref Dictionary<int, TargetInfo> targetTables,
            ref List<Transformation> transformations,
            int primarySourceId,
            int lineCount,
            int primaryFieldCount,
            int targetId,
            bool applyConditions)
        {
            //Apply all transformations
            ApplyTransformations(ref sourceTables, ref targetTables, ref transformations, primarySourceId, lineCount, primaryFieldCount, targetId, applyConditions);

            //Copy over fields from primary source to target which are not covered by rules
            ApplyFallbacks(ref sourceTables, ref targetTables, ref transformations, primarySourceId, lineCount, primaryFieldCount, targetId);

            return true;
        }

        public void ApplyFallbacks(ref Dictionary<int, SourceInfo> sourceTables,
            ref Dictionary<int, TargetInfo> targetTables,
            ref List<Transformation> transformations,
            int primarySourceId,
            int lineCount,
            int primaryFieldCount,
            int targetId)
        {
            List<string> fieldList = new List<string>(targetTables[targetId].targetFields.Keys);
            var targetFieldIndex = -1;
            var sourceFieldIndex = -1;
            //Check all target fields in the target table to see if they are populated or not
            foreach (string field in fieldList)
            {
                if (!targetTables[targetId].targetFields[field].populated)
                {
                    //Check the primary source for a corresponding column
                    if (sourceTables[primarySourceId].sourceFields.ContainsKey(field) ||
                        sourceTables[primarySourceId].sourceFields.ContainsKey(field.ToUpper()) ||
                        sourceTables[primarySourceId].sourceFields.ContainsKey(field.ToLower()))
                    {
                        targetFieldIndex = targetTables[targetId].targetFields[field].fieldIndex;
                        sourceFieldIndex = sourceTables[primarySourceId].sourceFields[field];
                        //Loop through all lines in the array corresponding to the rule field's sourcefield and prepend, append, and format as needed, then add to output table
                        for (int i = 0; i < lineCount; i++)
                        {
                            targetTables[targetId].targetVals[i][targetFieldIndex] = sourceTables[primarySourceId].sourceVals[i][sourceFieldIndex];
                        }
                    }
                }
            }
        }


        /// <summary>
        /// Applys a set of transformations to the given source tables and copies columns to targets
        /// </summary>
        /// <param name="sourceTables">Collection of source tables and their associated header data</param>
        /// <param name="output">Reference to output arrays</param>
        /// <param name="transformations">Collection of transformations which correspond to a map</param>
        /// <param name="primarySourceId">Id of the primary source</param>
        /// <param name="lineCount">Number of lines in the primary source</param>
        /// <param name="primaryFieldCount">Number of Fields in the primary source</param>
        public void ApplyTransformations(ref Dictionary<int, SourceInfo> sourceTables,
            ref Dictionary<int, TargetInfo> targetTables,
            ref List<Transformation> transformations,
            int primarySourceId,
            int lineCount,
            int primaryFieldCount,
            int targetId,
            bool applyConditions)
        {
            var sourceFieldName = "";
            var targetFieldName = "";
            var sourceFieldIndex = -1;
            var targetFieldIndex = -1;
            var resultString = "";
            int sourceFieldSourceId;

            //Local vars for condition evals
            string expr = "";
            List<Parameter> parameters = new List<Parameter>();
            Expression expression = null;
            bool conditionPass = false;

            //Operate on the output for each transformation
            foreach (Transformation transform in transformations)
            {
                //If the user has set "Apply Conditions" to true, init tokens
                if (applyConditions)
                {
                    //Get the list of tokens for all conditions in the transformation
                    //tokens = CondEvalHelpers.TokensFromConditions(transform.Conditions.OrderBy(x => x.SeqNum).ToList());
                    expr = CondEvalHelpers.ExprFromConditions(transform.Conditions.OrderBy(x => x.SeqNum).ToList(), ref parameters);
                    expression = new Expression(expr);

                    //Convert the token list to reverse polish notation
                    //tokens = CondEvalHelpers.ConvertToReversePolish(tokens);
                }

                List<RuleSourceField> ruleSourceFields = transform.Rule.RuleSourceFields.ToList();
                targetFieldName = transform.Rule.TargetField.Name;
                targetFieldIndex = targetTables[targetId].targetFields[targetFieldName].fieldIndex;

                switch (transform.Rule.Rule_Operation)
                {
                    case "sfield":
                        //Loop through all available rule fields and copy to intermediate vals
                        foreach (RuleSourceField ruleSourceField in ruleSourceFields)
                        {
                            sourceFieldName = ruleSourceField.SourceField.Name;
                            sourceFieldSourceId = ruleSourceField.SourceField.SourceId;

                            if (sourceTables[sourceFieldSourceId].sourceFields.ContainsKey(sourceFieldName))
                            {
                                sourceFieldIndex = sourceTables[sourceFieldSourceId].sourceFields[sourceFieldName];

                                //Loop through all lines in the source array corresponding to the rule field's sourcefield and prepend, append, and format as needed, then add to output table
                                for (int i = 0; i < lineCount; i++)
                                {
                                    //If the user wishes to apply conditions
                                    if (applyConditions)
                                    {
                                        //Get parameters from all of the source tables
                                        expression = CondEvalHelpers.GetExpressionParams(parameters, ref sourceTables, expression, i);
                                        if (expression.HasErrors())
                                        {
                                            conditionPass = false;
                                        }
                                        else
                                        {
                                            conditionPass = Convert.ToBoolean(expression.Evaluate());
                                        }

                                        if (conditionPass)
                                        {
                                            //Transform
                                            resultString = ruleSourceField.Prepend + sourceTables[sourceFieldSourceId].sourceVals[i][sourceFieldIndex] + ruleSourceField.Append;
                                            targetTables[targetId].targetVals[i][targetFieldIndex] = targetTables[targetId].targetVals[i][targetFieldIndex] + resultString;
                                        }
                                        else
                                        {
                                            targetTables[targetId].targetVals[i][targetFieldIndex] = "";
                                        }
                                    }
                                    else
                                    {
                                        //Transform without checking condition
                                        resultString = ruleSourceField.Prepend + sourceTables[sourceFieldSourceId].sourceVals[i][sourceFieldIndex] + ruleSourceField.Append;
                                        targetTables[targetId].targetVals[i][targetFieldIndex] = targetTables[targetId].targetVals[i][targetFieldIndex] + resultString;
                                    }

                                }

                                //Set the column to populated
                                targetTables[targetId].targetFields[targetFieldName].populated = true;
                            }
                            else
                            {
                                //Log
                            }

                        }
                        break;
                    case "assign":


                        break;
                    case "text":
                        //Loop through all lines in the array corresponding to the rule field's sourcefield and set to the text values
                        for (int i = 0; i < lineCount; i++)
                        {
                            targetTables[targetId].targetVals[i][targetFieldIndex] = targetTables[targetId].targetVals[i][targetFieldIndex] + transform.Rule.Rule_Value;
                        }
                        break;
                }
            }
        }

        /// <summary>
        /// Compares the number of primary source fields to target fields
        /// </summary>
        /// <param name="primarySourceId"></param>
        /// <param name="targetId"></param>
        /// <returns>Whether the number of sourcefields in the primary source is the same as the target</returns>
        public bool ComparePrimSourceTarget(int primarySourceId, int targetId)
        {
            //Short way to count without returning all entities
            var primaryCount = (from s in dbContext.Sources where s.SourceId == primarySourceId from sf in s.SourceFields select sf).Count();
            var targetCount = (from t in dbContext.Targets where t.TargetId == targetId from tf in t.TargetFields select tf).Count();
            return primaryCount == targetCount;
        }

        /// <summary>
        /// Gets the dictionary of source names with their arrays of values
        /// </summary>
        /// <param name="form">Form collection</param>
        /// <returns>Dictionary of source values indexed by source ID and containing one or multiple SourceInfo objects</returns>
        public Dictionary<int, SourceInfo> GetSourceTables(IFormCollection form)
        {
            //Stores source values in jagged string array with an associated dictionary of header names and indeces.
            var sourcesVals = new Dictionary<int, SourceInfo>();

            Parallel.ForEach(form.Files, async file =>
            {
                var sourceId = Convert.ToInt32(file.Name);
                var sourceFields = new Dictionary<string, int>();

                //Get form info pertinent to current file
                var delimiter = Convert.ToChar(form["delimiter-" + sourceId]);
                var firstRowIsHeader = Convert.ToBoolean(form["firstRowHeader-" + sourceId]);
                int altHeadRow = 0;
                if (!firstRowIsHeader)
                {
                    altHeadRow = Convert.ToInt32(form["altHeadRow-" + sourceId]) - 1;
                }

                using (var buffer = new BufferedStream(file.OpenReadStream()))
                using (var reader = new StreamReader(buffer))
                {
                    var lines = await ReadAllLinesAsync(reader, Encoding.UTF8);
                    string[] splitline;

                    //Get the number of header fields
                    splitline = lines[altHeadRow++].Trim().Replace("\r", "").Replace("\n", "").Split(delimiter);
                    int headerCount = splitline.Length;
                    int adjustedLineCount = lines.Length - altHeadRow;

                    var sourceTable = new string[adjustedLineCount][];

                    //Initialize inner string array
                    for (int z = 0; z < adjustedLineCount; z++)
                    {
                        sourceTable[z] = new string[headerCount];
                    }

                    for (int z = 0; z < headerCount; z++)
                    {
                        sourceFields.Add(splitline[z], z);
                    }

                    //Get the data from the file and put it in string array, start reading at altHeadRow 
                    for (int i = 0; i < adjustedLineCount; i++)
                    {
                        splitline = lines[altHeadRow++].Trim().Replace("\r", "").Replace("\n", "").Split(delimiter);
                        for (int j = 0; j < headerCount; j++)
                        {
                            sourceTable[i][j] = splitline[j];
                        }
                    }

                    sourcesVals.Add(sourceId, new SourceInfo(sourceFields, sourceTable));
                }
            });

            return sourcesVals;
        }

        /// <summary>
        /// Read lines asynchronously
        /// </summary>
        /// <param name="reader"></param>
        /// <param name="encoding"></param>
        /// <returns>An array containing all lines read from a file</returns>
        public async Task<string[]> ReadAllLinesAsync(StreamReader reader, Encoding encoding)
        {
            var lines = new List<string>();

            using (var rdr = reader)
            {
                string line;
                while ((line = await rdr.ReadLineAsync()) != null)
                {
                    lines.Add(line);
                }
            }

            return lines.ToArray();
        }

        /// <summary>
        /// Get the primary source id from form
        /// </summary>
        /// <param name="form"></param>
        /// <returns>ID of the primary source</returns>
        public int GetPrimarySourceId(ref IFormCollection form)
        {
            //Determine which source has been marked as primary
            var primarySourceId = -1;
            foreach (IFormFile file in form.Files)
            {
                if (Convert.ToBoolean(form["primary-" + file.Name]) == true)
                {
                    primarySourceId = Convert.ToInt32(file.Name);
                }
            }
            return primarySourceId;
        }

        /// <summary>
        /// Gets the set of transformations for a given mapId
        /// </summary>
        /// <param name="mapId"></param>
        /// <returns>List of Transformations for a given Map</returns>
        public List<Transformation> GetMapTransformations(int mapId)
        {
            return dbContext.Transformations.Where(x => x.MapId == mapId)
                 .Include(transform => transform.Conditions)
                     .ThenInclude(condition => condition.SourceField)
                 .Include(transform => transform.Rule.TargetField.Target)
                 .Include(transform => transform.Rule.RuleSourceFields)
                         .ThenInclude(ruleSourceField => ruleSourceField.SourceField).ToList();
        }

        /// <summary>
        /// Gets a dictionary of TargetFields and their corresponding indexes for a target
        /// </summary>
        /// <param name="targetId"></param>
        /// <returns>TargetTable for a given target</returns>
        public Dictionary<int, TargetInfo> GetTargetTables(ref List<Transformation> transformations, int primarySourceId, int lineCount, int primaryFieldCount)
        {
            Dictionary<int, TargetInfo> targetInfo = new Dictionary<int, TargetInfo>();

            //Check if the target has the same number of fields as the primary source
            //TODO - add support for multiple target files
            var targetId = transformations[0].Rule.TargetField.TargetId;

            //Not the same number of source and target fields
            if (!ComparePrimSourceTarget(primarySourceId, targetId))
            {
                return null;
            }

            //Create a jagged output array the same size as the primary source jagged array.
            var targetVals = new string[lineCount][];

            //Initialize inner string arrays for output
            for (int i = 0; i < lineCount; i++)
            {
                targetVals[i] = new string[primaryFieldCount];
            }

            List<TargetField> targetFields = dbContext.TargetFields.Where(x => x.TargetId == targetId).OrderBy(x => x.SeqNum).ToList();
            Dictionary<string, TargetFieldInfo> targetFieldsDict = new Dictionary<string, TargetFieldInfo>();
            for (int i = 0; i < targetFields.Count; i++)
            {
                targetFieldsDict.Add(targetFields[i].Name, new TargetFieldInfo(i, false));
            }

            targetInfo[targetId] = new TargetInfo(targetFieldsDict, targetVals);
            return targetInfo;
        }
    }

    public class TargetInfo
    {
        public Dictionary<string, TargetFieldInfo> targetFields { get; set; }
        public string[][] targetVals { get; set; }

        public TargetInfo(Dictionary<string, TargetFieldInfo> targetFields, string[][] targetVals)
        {
            this.targetFields = targetFields;
            this.targetVals = targetVals;
        }
    }

    public class TargetFieldInfo
    {
        public int fieldIndex;
        public bool populated;

        public TargetFieldInfo(int fieldIndex, bool populated)
        {
            this.fieldIndex = fieldIndex;
            this.populated = populated;
        }
    }

    public class SourceInfo
    {
        public Dictionary<string, int> sourceFields { get; set; }
        public string[][] sourceVals { get; set; }

        public SourceInfo(Dictionary<string, int> sourceFields, string[][] sourceVals)
        {
            this.sourceFields = sourceFields;
            this.sourceVals = sourceVals;
        }
    }
}
