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
        private readonly GTiHubContext _dbContext;
        public UsersController(GTiHubContext _dbContext)
        {
            this._dbContext = _dbContext;
        }

        // GET: api/Users
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _dbContext.Users.ToList();
        }

        // GET api/Users/5
        [HttpGet("{id}", Name = "GetUser")]
        public IActionResult Get(int id)
        {
            var user = _dbContext.Users.FirstOrDefault(x => x.UserId == id);
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
            _dbContext.Users.Add(user);
            _dbContext.SaveChanges();
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

            var updatedUser = _dbContext.Users.FirstOrDefault(x => x.UserId == id);

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

            _dbContext.SaveChanges();

            return new NoContentResult();

        }

        // DELETE api/Users/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var user = _dbContext.Users.FirstOrDefault(x => x.UserId == id);
            if(user == null)
            {
                return NotFound();
            }
            _dbContext.Users.Remove(user);
            _dbContext.SaveChanges();
            return new NoContentResult();
        }
    }
}
