using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using GTiHub.Models.EntityModel;
using Microsoft.EntityFrameworkCore;

namespace GTiHub.Controllers.API
{
    [Route("api/[controller]")]
    public class ClientsController : Controller
    {
        private readonly GTiHubContext dbContext;
        public ClientsController(GTiHubContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET: api/Clients
        [HttpGet]
        public IEnumerable<Client> Get()
        {
            return dbContext.Clients.ToList();
        }

        // GET api/Clients/5
        [HttpGet("{id}", Name = "GetClient")]
        public IActionResult Get(int id)
        {
            var client = dbContext.Clients.FirstOrDefault(x => x.clientId == id);
            if (client == null)
            {
                return NotFound();
            }
            return new ObjectResult(client);
        }

        // POST api/Clients
        [HttpPost]
        public IActionResult Post([FromBody]Client client)
        {
            if (client == null)
            {
                return BadRequest();
            }
            dbContext.Clients.Add(client);
            dbContext.SaveChanges();
            return CreatedAtRoute("GetClient", new { id = client.clientId }, client);
        }

        // PUT api/Clients/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Client client)
        {
            if (client == null || client.clientId != id)
            {
                return BadRequest();
            }

            var updatedClient = dbContext.Clients.FirstOrDefault(x => x.clientId == id);

            if (updatedClient == null)
            {
                return NotFound();
            }

            dbContext.Clients.Attach(updatedClient);
            dbContext.Entry(updatedClient).State = EntityState.Modified;
            dbContext.SaveChanges();

            return new NoContentResult();
        }

        // DELETE api/Clients/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var client = dbContext.Clients.FirstOrDefault(x => x.clientId == id);
            if (client == null)
            {
                return NotFound();
            }
            dbContext.Clients.Remove(client);
            return new NoContentResult();
        }
    }
}
