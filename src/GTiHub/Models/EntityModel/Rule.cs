using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Rule
    {
        public Rule()
        {
            this.RuleSourceFields = new List<RuleSourceField>();
        }

        public int ruleId { get; set; }
        public int tfieldId { get; set; }
        public int transformId { get; set; }
        public string rule_value { get; set; }
        public DateTime creation_date { get; set; }

        public virtual TargetField TargetField { get; set; }
        public virtual Transformation Transformation { get; set; }
        public virtual ICollection<RuleSourceField> RuleSourceFields { get; set; }
    }
}
