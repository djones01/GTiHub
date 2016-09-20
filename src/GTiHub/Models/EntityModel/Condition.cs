using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Condition : BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ConditionId { get; set; }
        public string Left_Paren { get; set; }
        public string Operation { get; set; }
        public string Cond_Value { get; set; }
        public string Right_Paren { get; set; }

        public int SourceFieldId { get; set; }
        public virtual SourceField SourceField { get; set; }

        public int TransformationId { get; set; }
        public virtual Transformation Transformation { get; set; }
    }
}
