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
            var user = dbContext.Users.FirstOrDefault(x => x.UserId == id);
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
            return CreatedAtRoute("GetUser", new { id = user.UserId }, user);
        }

        // PUT api/Users/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]User user)
        {
            if(user == null || user.UserId != id)
            {
                return BadRequest();
            }

            var updatedUser = dbContext.Users.FirstOrDefault(x => x.UserId == id);

            if(updatedUser == null)
            {
                return NotFound();
            }

            updatedUser.FirstName = user.FirstName;
            updatedUser.LastName = user.LastName;
            updatedUser.Title = user.Title;
            updatedUser.Email = user.Email;
            updatedUser.Phone = user.Phone;
            updatedUser.Salt = user.Salt;
            updatedUser.Hash = user.Hash;
            updatedUser.UserProjectSecs = user.UserProjectSecs;

            dbContext.SaveChanges();

            return new NoContentResult();

        }

        // DELETE api/Users/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var user = dbContext.Users.FirstOrDefault(x => x.UserId == id);
            if(user == null)
            {
                return NotFound();
            }
            dbContext.Users.Remove(user);
            dbContext.SaveChanges();
            return new NoContentResult();
        }
    }
}
