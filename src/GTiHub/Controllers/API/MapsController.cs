using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using GTiHub.Models.EntityModel;
using System.Linq;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace GTiHub.Controllers.API
{
    [Route("api/[controller]")]
    public class MapsController : Controller
    {
        private readonly GTiHubContext dbContext;
        public MapsController(GTiHubContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET: api/Maps
        [HttpGet]
        public IEnumerable<Map> Get()
        {
            return dbContext.Maps.ToList();
        }

        // GET api/Maps/5
        [HttpGet("{id}", Name = "GetMap")]
        public IActionResult Get(int id)
        {
            var map = dbContext.Maps.FirstOrDefault(x => x.mapId == id);
            if (map == null)
            {
                return NotFound();
            }
            return new ObjectResult(map);
        }

        // POST api/Maps
        [HttpPost]
        public IActionResult Post([FromBody]Map map)
        {
            if (map == null)
            {
                return BadRequest();
            }
            dbContext.Maps.Add(map);
            dbContext.SaveChanges();
            return CreatedAtRoute("GetMap", new { id = map.mapId }, map);
        }

        // PUT api/Maps/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Map map)
        {
            if (map == null || map.mapId != id)
            {
                return BadRequest();
            }

            var updatedMap = dbContext.Maps.FirstOrDefault(x => x.mapId == id);

            if (updatedMap == null)
            {
                return NotFound();
            }

            dbContext.Maps.Attach(updatedMap);
            dbContext.Entry(updatedMap).State = EntityState.Modified;
            dbContext.SaveChanges();

            return new NoContentResult();
        }

        // DELETE api/Maps/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var map = dbContext.Maps.FirstOrDefault(x => x.mapId == id);
            if (map == null)
            {
                return NotFound();
            }
            dbContext.Maps.Remove(map);
            return new NoContentResult();
        }
    }
}
