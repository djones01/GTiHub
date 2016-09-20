using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Map : BaseEntity
    {
        public Map()
        {
            this.ProjectMaps = new List<ProjectMap>();
            this.Transformations = new List<Transformation>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MapId { get; set; }
        public string Description { get; set; }
        public DateTime Effective_Date { get; set; }
        public bool Active { get; set; }

        public virtual ICollection<ProjectMap> ProjectMaps { get; set; }
        public virtual ICollection<Transformation> Transformations { get; set; }
    }
}
