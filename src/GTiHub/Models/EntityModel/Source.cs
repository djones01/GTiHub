using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Source
    {
        public Source()
        {
            this.Projects = new List<Project>();
            this.SourceFields = new List<SourceField>();
        }

        public int sourceId { get; set; }
        public string description { get; set; }
        public DateTime creation_date { get; set; }
        public DateTime effective_date { get; set; }
        public bool active { get; set; }

        public virtual ICollection<Project> Projects { get; set; }
        public virtual ICollection<SourceField> SourceFields { get; set; }
    }
}
