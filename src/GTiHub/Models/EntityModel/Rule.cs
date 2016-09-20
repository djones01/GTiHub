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
        public int RuleId { get; set; }

        public string Rule_Value { get; set; }

        public int TargetFieldId { get; set; }
        public virtual TargetField TargetField { get; set; }

        public int TransformationId { get; set; }
        public virtual Transformation Transformation { get; set; }
        public virtual ICollection<RuleSourceField> RuleSourceFields { get; set; }
    }
}
