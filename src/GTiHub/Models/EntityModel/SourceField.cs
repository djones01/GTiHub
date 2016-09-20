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
        public int SourceFieldId { get; set; }
        public string Name { get; set; }
        public string Datatype { get; set; }
        public bool Active { get; set; }
        public int SeqNum { get; set; }

        public virtual ICollection<Condition> Conditions { get; set; }
        public virtual ICollection<RuleSourceField> RuleSourceFields { get; set; }

        public int SourceId { get; set; }
        public virtual Source Source { get; set; }
    }
}
