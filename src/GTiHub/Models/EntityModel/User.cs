using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class User
    {
        public User()
        {
            this.UserProjectSecs = new List<UserProjectSec>();
        }
        public int userId { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public DateTime creation_date { get; set; }
        public string title { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public string salt { get; set; }
        public string hash { get; set; }

        public virtual ICollection<UserProjectSec> UserProjectSecs { get; set; }
    }
}
