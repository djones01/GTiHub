using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class SourceField : BaseEntity
    {
        public SourceField()
        {
            this.Conditions = new List<Condition>();
            this.RuleSourceFields = new List<RuleSourceField>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int sfieldId { get; set; }
        public string name { get; set; }
        public string datatype { get; set; }
        public bool active { get; set; }
        public int sequence_num { get; set; }

        public virtual ICollection<Condition> Conditions { get; set; }
        public virtual ICollection<RuleSourceField> RuleSourceFields { get; set; }
        public virtual Source Source { get; set; }
    }
}
