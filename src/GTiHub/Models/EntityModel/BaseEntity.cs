using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class BaseEntity
    {
        public DateTime? creation_date { get; set; }
        public string created_by { get; set; }
        public DateTime? date_modified { get; set; }
        public string modified_by { get; set; }
    }
}
