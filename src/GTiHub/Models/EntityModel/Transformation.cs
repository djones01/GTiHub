using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Transformation : BaseEntity
    {
        public Transformation()
        {
            this.Conditions = new List<Condition>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TransformationId { get; set; }
        public string Description { get; set; }

        public int MapId { get; set; }
        public virtual Map Map { get; set; }

        public int RuleId { get; set; }
        public virtual Rule Rule { get; set; }
        public virtual ICollection<Condition> Conditions { get; set; }    
    }
}
