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
        public int RuleSourceFieldId { get; set; }
        public int SeqNum { get; set; }
        public string Append { get; set; }
        public string Prepend { get; set; }
        public string Custom_Format { get; set; }

        public int RuleId { get; set; }
        public virtual Rule Rule { get; set; }

        public int SourceFieldId { get; set; }
        public virtual SourceField SourceField { get; set; }
    }
}
