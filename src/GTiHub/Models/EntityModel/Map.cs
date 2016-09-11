using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Map
    {
        public Map()
        {
            this.ProjectMaps = new List<ProjectMap>();
            this.Transformations = new List<Transformation>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int mapId { get; set; }
        public string description { get; set; }
        public DateTime creation_date { get; set; }
        public DateTime effective_date { get; set; }
        public bool active { get; set; }

        public virtual ICollection<ProjectMap> ProjectMaps { get; set; }
        public virtual ICollection<Transformation> Transformations { get; set; }
    }
}
