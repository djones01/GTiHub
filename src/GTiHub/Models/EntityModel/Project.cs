using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Project
    {
        public Project()
        {
            this.Maps = new List<Map>();
            this.Targets = new List<Target>();
            this.Sources = new List<Source>();
            this.UserProjectSecs = new List<UserProjectSec>();
        }

        public int projectId { get; set; }
        public string name { get; set; }
        public DateTime creation_date { get; set; }
        public string description { get; set; }
        public string proj_type { get; set; }
        public int clientId { get; set; }

        public virtual Client Client { get; set; }
        public virtual ICollection<Map> Maps { get; set; }
        public virtual ICollection<Target> Targets { get; set; }
        public virtual ICollection<Source> Sources { get; set; }
        public virtual ICollection<UserProjectSec> UserProjectSecs { get; set; }
    }
}
