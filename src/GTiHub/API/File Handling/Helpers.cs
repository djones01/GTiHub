using System;
using System.Collections.Generic;

namespace GTiHub.API
{
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
