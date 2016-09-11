using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Target
    {
        public Target()
        {
            this.Projects = new List<Project>();
            this.TargetFields = new List<TargetField>();
        }

        public int targetId { get; set; }
        public string description { get; set; }
        public DateTime creation_date { get; set; }
        public DateTime effective_date { get; set; }
        public bool active { get; set; }

        public virtual ICollection<Project> Projects { get; set; }
        public virtual ICollection<TargetField> TargetFields { get; set; }
    }
}
