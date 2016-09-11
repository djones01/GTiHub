using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class TargetField
    {
        public TargetField()
        {
            this.Rules = new List<Rule>();
        }

        public int tfieldId { get; set; }
        public string name { get; set; }
        public System.DateTime creation_date { get; set; }
        public string datatype { get; set; }
        public bool active { get; set; }
        public int sequence_num { get; set; }
        public int targetId { get; set; }

        public virtual ICollection<Rule> Rules { get; set; }
        public virtual Target Target { get; set; }
    }
}
