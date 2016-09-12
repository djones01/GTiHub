using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class User : BaseEntity
    {
        public User()
        {
            this.UserProjectSecs = new List<UserProjectSec>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int userId { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string title { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public string salt { get; set; }
        public string hash { get; set; }

        public virtual ICollection<UserProjectSec> UserProjectSecs { get; set; }
    }
}
