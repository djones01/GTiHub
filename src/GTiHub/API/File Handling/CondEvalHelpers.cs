using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GTiHub.Models.EntityModel;
using System.Text;
using System.Collections;
using NCalc;

namespace GTiHub.API.File_Handling
{
    public static class CondEvalHelpers
    {
        public static string ExprFromConditions(List<Condition> conditions, ref List<Parameter> parameters)
        {
            if (conditions == null)
            {
                return null;
            }

            string expr = "";
            int paramIndex = 0;

            //Build Token string from conditions
            foreach (Condition condition in conditions)
            {
                //Add the logical operators (OR and AND) if exists
                if (condition.Chain_Operation != "") expr += condition.Chain_Operation + " ";

                //Add left paren if exists
                if (condition.Left_Paren != "") expr += "( ";

                //Add sourcefield parameter - use index for parameter id and match to Parameter in Parameters list
                expr += "[" + paramIndex + "] ";
                parameters.Add(new Parameter(condition.SourceField.SourceId, condition.SourceField.Name, paramIndex.ToString()));

                //Add operator
                expr += condition.Operation + " ";

                //Add right operand
                switch (condition.SourceField.Datatype)
                {
                    case "url":
                    case "email":
                    case "text":
                        expr += "'" + condition.Cond_Value + "' ";
                        break;
                    case "date":
                        expr += "#" + condition.Cond_Value + "# ";
                        break;
                    case "bool":
                    case "decimal":
                    case "currency":
                        expr += condition.Cond_Value + " ";
                        break;
                }

                //Add the right paren if exists
                if (condition.Right_Paren != "") expr += ") ";
                paramIndex++;
            }

            return expr;
        }

        public static Expression GetExpressionParams(List<Parameter> parameters, ref Dictionary<int, SourceInfo> sourceTables, Expression expression, int row)
        {
            int sourceFieldIndex;
            foreach (Parameter parameter in parameters)
            {
                //Get the index of the named column in the source tables
                sourceFieldIndex = sourceTables[parameter.sourceId].SourceFields[parameter.sourceFieldName];
                //Get the value of the column at the given row and column, then set parameter value
                expression.Parameters[parameter.parameterId] = sourceTables[parameter.sourceId].SourceVals[row][sourceFieldIndex];
            }
            return expression;
        }
    }

    public class Parameter
    {
        public int sourceId;
        public string sourceFieldName;
        public string parameterId;

        public Parameter(int sourceId, string sourceFieldName, string parameterId)
        {
            this.sourceId = sourceId;
            this.sourceFieldName = sourceFieldName;
            this.parameterId = parameterId;
        }
    }
}

   