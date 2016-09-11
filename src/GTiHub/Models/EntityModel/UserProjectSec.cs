using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class UserProjectSec
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int user_proj_sec_Id { get; set; }
        public int userId { get; set; }
        public int projectId { get; set; }
        public DateTime added_date { get; set; }
        public int access_level { get; set; }
        public bool active_on_project { get; set; }

        public virtual Project Project { get; set; }
        public virtual User User { get; set; }
    }
}
