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
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Salt { get; set; }
        public string Hash { get; set; }

        public virtual ICollection<UserProjectSec> UserProjectSecs { get; set; }
    }
}
