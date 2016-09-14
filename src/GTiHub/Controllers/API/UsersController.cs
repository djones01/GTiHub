using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using GTiHub.Models.EntityModel;
using Microsoft.EntityFrameworkCore;

namespace GTiHub.Controllers.API
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly GTiHubContext dbContext;
        public UsersController(GTiHubContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET: api/Users
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return dbContext.Users.ToList();
        }

        // GET api/Users/5
        [HttpGet("{id}", Name = "GetUser")]
        public IActionResult Get(int id)
        {
            var user = dbContext.Users.FirstOrDefault(x => x.userId == id);
            if(user == null)
            {
                return NotFound();
            }
            return new ObjectResult(user);
        }
 
        // POST api/Users
        [HttpPost]
        public IActionResult Post([FromBody]User user)
        {
            if(user == null)
            {
                return BadRequest();
            }
            dbContext.Users.Add(user);
            dbContext.SaveChanges();
            return CreatedAtRoute("GetUser", new { id = user.userId }, user);
        }

        // PUT api/Users/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]User user)
        {
            if(user == null || user.userId != id)
            {
                return BadRequest();
            }

            var updatedUser = dbContext.Users.FirstOrDefault(x => x.userId == id);

            if(updatedUser == null)
            {
                return NotFound();
            }

            dbContext.Users.Attach(updatedUser);
            dbContext.Entry(updatedUser).State = EntityState.Modified;
            dbContext.SaveChanges();

            return new NoContentResult();

        }

        // DELETE api/Users/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var user = dbContext.Users.FirstOrDefault(x => x.userId == id);
            if(user == null)
            {
                return NotFound();
            }
            dbContext.Users.Remove(user);
            return new NoContentResult();
        }
    }
}
