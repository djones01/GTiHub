using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GTiHub.Models.EntityModel;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace GTiHub.API
{
    [Route("api/[controller]")]
    public class SourceSelectController : Controller
    {
        private readonly GTiHubContext dbContext;
        public SourceSelectController(GTiHubContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IEnumerable<SourceField> GetSourceFieldsbySource(int id)
        {
            return dbContext.SourceFields.Where(x => x.SourceId == id).ToList();
        }
    }
}
