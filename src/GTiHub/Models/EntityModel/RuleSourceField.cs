using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class RuleSourceField
    {
        public int rulesourceId { get; set; }
        public int ruleId { get; set; }
        public int sfieldId { get; set; }
        public string append { get; set; }
        public string prepend { get; set; }
        public string custom_format { get; set; }

        public virtual Rule Rule { get; set; }
        public virtual SourceField SourceField { get; set; }
    }
}
