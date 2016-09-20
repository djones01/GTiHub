using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class TargetField : BaseEntity
    {
        public TargetField()
        {
            this.Rules = new List<Rule>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TargetFieldId { get; set; }
        public string Name { get; set; }
        public string Datatype { get; set; }
        public bool Active { get; set; }
        public int SeqNum { get; set; }

        public virtual ICollection<Rule> Rules { get; set; }

        public int TargetId { get; set; }
        public virtual Target Target { get; set; }
    }
}
