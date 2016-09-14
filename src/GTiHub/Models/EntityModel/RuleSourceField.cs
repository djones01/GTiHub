using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class RuleSourceField : BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int rulesourceId { get; set; }
        public string append { get; set; }
        public string prepend { get; set; }
        public string custom_format { get; set; }

        public virtual Rule Rule { get; set; }
        public virtual SourceField SourceField { get; set; }
    }
}
