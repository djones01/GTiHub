using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Rule : BaseEntity
    {
        public Rule()
        {
            this.RuleSourceFields = new List<RuleSourceField>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ruleId { get; set; }

        public string rule_value { get; set; }

        public virtual TargetField TargetField { get; set; }
        public virtual Transformation Transformation { get; set; }
        public virtual ICollection<RuleSourceField> RuleSourceFields { get; set; }
    }
}
