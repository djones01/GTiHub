using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class UserProjectSec : BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserProjSecId { get; set; }
        public DateTime Added_Date { get; set; }
        public int Access_Level { get; set; }
        public bool Active_On_Project { get; set; }

        public int ProjectId { get; set; }
        public virtual Project Project { get; set; }

        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}
