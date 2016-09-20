using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Source : BaseEntity
    {
        public Source()
        {
            this.ProjectSources = new List<ProjectSource>();
            this.SourceFields = new List<SourceField>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SourceId { get; set; }
        public string Description { get; set; }
        public DateTime Effective_Date { get; set; }
        public bool Active { get; set; }

        public virtual ICollection<ProjectSource> ProjectSources { get; set; }
        public virtual ICollection<SourceField> SourceFields { get; set; }
    }
}
