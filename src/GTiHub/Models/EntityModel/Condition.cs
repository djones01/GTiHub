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
        public int condId { get; set; }
        public string left_paren { get; set; }
        public string operation { get; set; }
        public string cond_value { get; set; }
        public string right_paren { get; set; }

        public virtual SourceField SourceField { get; set; }
        public virtual Transformation Transformation { get; set; }
    }
}
