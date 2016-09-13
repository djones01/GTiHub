using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GTiHub.Models.EntityModel;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace GTiHub.Controllers.API
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly GTiHubContext dbContext;
        public UserController(GTiHubContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET: api/User
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return dbContext.Users.ToList();
        }

        // GET api/User/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
 
        // POST api/User
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/User/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/User/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
