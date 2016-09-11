using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class Transformation
    {
        public Transformation()
        {
            this.Conditions = new List<Condition>();
        }

        public int transformId { get; set; }
        public int mapId { get; set; }
        public DateTime creation_date { get; set; }

        public virtual Map Map { get; set; }
        public virtual Rule Rule { get; set; }
        public virtual ICollection<Condition> Conditions { get; set; }    
    }
}
