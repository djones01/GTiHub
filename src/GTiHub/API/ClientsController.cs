using GTiHub.Models.EntityModel;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace GTiHub.Controllers.API
{
    [Route("api/[controller]")]
    public class ClientsController : Controller
    {
        private readonly GTiHubContext _dbContext;
        public ClientsController(GTiHubContext _dbContext)
        {
            this._dbContext = _dbContext;
        }

        // GET: api/Clients
        [HttpGet]
        public IEnumerable<Client> Get()
        {
            return _dbContext.Clients.ToList();
        }

        // GET api/Clients/5
        [HttpGet("{id}", Name = "GetClient")]
        public IActionResult Get(int id)
        {
            var client = _dbContext.Clients.FirstOrDefault(x => x.ClientId == id);
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
            _dbContext.Clients.Add(client);
            _dbContext.SaveChanges();
            return CreatedAtRoute("GetClient", new { id = client.ClientId }, client);
        }

        // PUT api/Clients/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Client client)
        {
            if (client == null || client.ClientId != id)
            {
                return BadRequest();
            }

            var updatedClient = _dbContext.Clients.FirstOrDefault(x => x.ClientId == id);

            if (updatedClient == null)
            {
                return NotFound();
            }

            updatedClient.Name = client.Name;
            updatedClient.Industry = client.Industry;

            _dbContext.SaveChanges();

            return new NoContentResult();
        }

        // DELETE api/Clients/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var client = _dbContext.Clients.FirstOrDefault(x => x.ClientId == id);
            if (client == null)
            {
                return NotFound();
            }
            _dbContext.Clients.Remove(client);
            _dbContext.SaveChanges();
            return new NoContentResult();
        }
    }
}
