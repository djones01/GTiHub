using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class ProjectSource : BaseEntity
    {
        public int ProjectId { get; set; }
        public virtual Project Project { get; set; }
        public int SourceId { get; set; }
        public virtual Source Source { get; set; }
    }
}
