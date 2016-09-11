using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Project
    {
        public Project()
        {
            this.ProjectMaps = new List<ProjectMap>();
            this.ProjectTargets = new List<ProjectTarget>();
            this.ProjectSources = new List<ProjectSource>();
            this.UserProjectSecs = new List<UserProjectSec>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int projectId { get; set; }
        public string name { get; set; }
        public DateTime creation_date { get; set; }
        public string description { get; set; }
        public string proj_type { get; set; }
        public int clientId { get; set; }

        public virtual Client Client { get; set; }
        public virtual ICollection<ProjectMap> ProjectMaps { get; set; }
        public virtual ICollection<ProjectTarget> ProjectTargets { get; set; }
        public virtual ICollection<ProjectSource> ProjectSources { get; set; }
        public virtual ICollection<UserProjectSec> UserProjectSecs { get; set; }
    }
}
