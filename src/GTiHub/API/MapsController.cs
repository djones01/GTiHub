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
            var map = dbContext.Maps.FirstOrDefault(x => x.MapId == id);
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
            return CreatedAtRoute("GetMap", new { id = map.MapId }, map);
        }

        // PUT api/Maps/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Map map)
        {
            if (map == null || map.MapId != id)
            {
                return BadRequest();
            }

            var updatedMap = dbContext.Maps.FirstOrDefault(x => x.MapId == id);

            if (updatedMap == null)
            {
                return NotFound();
            }

            updatedMap.Description = map.Description;
            updatedMap.Effective_Date = map.Effective_Date;
            updatedMap.Active = map.Active;
            updatedMap.ProjectMaps = map.ProjectMaps;
            updatedMap.Transformations = map.Transformations;

            dbContext.SaveChanges();

            return new NoContentResult();
        }

        // DELETE api/Maps/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var map = dbContext.Maps.FirstOrDefault(x => x.MapId == id);
            if (map == null)
            {
                return NotFound();
            }
            dbContext.Maps.Remove(map);
            dbContext.SaveChanges();
            return new NoContentResult();
        }
    }
}
