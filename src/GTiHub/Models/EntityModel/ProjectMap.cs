using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class ProjectMap : BaseEntity
    {
        public int ProjectId { get; set; }
        public virtual Project Project { get; set; }
        public int MapId { get; set; }
        public virtual Map Map { get; set; }
    }
}
