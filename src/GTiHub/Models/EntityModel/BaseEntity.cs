using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class BaseEntity
    {
        public DateTime? Creation_Date { get; set; }
        public string Created_By { get; set; }
        public DateTime? Date_Modified { get; set; }
        public string Modified_By { get; set; }
    }
}
