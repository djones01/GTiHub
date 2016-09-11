using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class SourceField
    {
        public SourceField()
        {
            this.Conditions = new List<Condition>();
            this.RuleSourceFields = new List<RuleSourceField>();
        }

        public int sfieldId { get; set; }
        public string name { get; set; }
        public DateTime creation_date { get; set; }
        public string datatype { get; set; }
        public bool active { get; set; }
        public int sequence_num { get; set; }
        public int sourceId { get; set; }

        public virtual ICollection<Condition> Conditions { get; set; }
        public virtual ICollection<RuleSourceField> RuleSourceFields { get; set; }
        public virtual Source Source { get; set; }
    }
}
