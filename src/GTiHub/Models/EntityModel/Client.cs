using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Client
    {
        public Client()
        {
            this.Projects = new List<Project>();
        }
        public int clientId { get; set; }
        public string name { get; set; }
        public DateTime creation_date { get; set; }
        public string industry { get; set; }

        public virtual ICollection<Project> Projects { get; set; }
    }
}
