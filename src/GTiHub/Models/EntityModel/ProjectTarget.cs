using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class ProjectTarget : BaseEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Key]
        public int projectId { get; set; }
        public virtual Project project { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Key]
        public int targetId { get; set; }
        public virtual Target target { get; set; }
    }
}
