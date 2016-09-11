using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Source
    {
        public Source()
        {
            this.ProjectSources = new List<ProjectSource>();
            this.SourceFields = new List<SourceField>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int sourceId { get; set; }
        public string description { get; set; }
        public DateTime creation_date { get; set; }
        public DateTime effective_date { get; set; }
        public bool active { get; set; }

        public virtual ICollection<ProjectSource> ProjectSources { get; set; }
        public virtual ICollection<SourceField> SourceFields { get; set; }
    }
}
