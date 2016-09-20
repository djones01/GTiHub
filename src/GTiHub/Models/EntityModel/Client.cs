using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Client : BaseEntity
    {
        public Client()
        {
            this.Projects = new List<Project>();
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ClientId { get; set; }
        public string Name { get; set; }
    
        public string Industry { get; set; }

        public virtual ICollection<Project> Projects { get; set; }
    }
}
