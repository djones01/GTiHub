using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Target : BaseEntity
    {
        public Target()
        {
            this.ProjectTargets = new List<ProjectTarget>();
            this.TargetFields = new List<TargetField>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TargetId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime Effective_Date { get; set; }
        public bool Active { get; set; }

        public virtual ICollection<ProjectTarget> ProjectTargets { get; set; }
        public virtual ICollection<TargetField> TargetFields { get; set; }
    }
}
