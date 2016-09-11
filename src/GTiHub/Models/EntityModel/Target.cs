using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Target
    {
        public Target()
        {
            this.ProjectTargets = new List<ProjectTarget>();
            this.TargetFields = new List<TargetField>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int targetId { get; set; }
        public string description { get; set; }
        public DateTime creation_date { get; set; }
        public DateTime effective_date { get; set; }
        public bool active { get; set; }

        public virtual ICollection<ProjectTarget> ProjectTargets { get; set; }
        public virtual ICollection<TargetField> TargetFields { get; set; }
    }
}
