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
        
        public SourceField(string name, string datatype, bool active, int seqnum)
        {
            this.Name = name;
            this.Datatype = datatype;
            this.Active = active;
            this.SeqNum = seqnum;
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

        [ForeignKey("SourceFieldId")]
        public virtual ICollection<Condition> Conditions { get; set; }
        [ForeignKey("SourceFieldId")]
        public virtual ICollection<RuleSourceField> RuleSourceFields { get; set; }

        public int SourceId { get; set; }
        public virtual Source Source { get; set; }
    }
}
