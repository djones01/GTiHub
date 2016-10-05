using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GTiHub.Models.EntityModel;

namespace GTiHub.Controllers.API
{
    [Route("api/[controller]")]
    public class SourcesController : Controller
    {
        private readonly GTiHubContext dbContext;
        public SourcesController(GTiHubContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET: api/Sources
        [HttpGet]
        public IEnumerable<Source> Get()
        {
            return dbContext.Sources.ToList();
        }

        // GET api/Sources/5
        [HttpGet("{id}", Name = "GetSource")]
        public IActionResult Get(int id)
        {
            var source = dbContext.Sources.FirstOrDefault(x => x.SourceId == id);
            if (source == null)
            {
                return NotFound();
            }
            return new ObjectResult(source);
        }

        // POST api/Sources
        [HttpPost]
        public IActionResult Post([FromBody]Source source)
        {
            if (source == null)
            {
                return BadRequest();
            }
            dbContext.Sources.Add(source);
            foreach(SourceField sfield in source.SourceFields)
            {
                dbContext.SourceFields.Add(sfield);
            }  
            dbContext.SaveChanges();
            return CreatedAtRoute("GetSource", new { id = source.SourceId }, source);
        }

        // PUT api/Sources/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Source source)
        {
            if (source == null || source.SourceId != id)
            {
                return BadRequest();
            }

            var updatedSource = dbContext.Sources.FirstOrDefault(x => x.SourceId == id);

            if (updatedSource == null)
            {
                return NotFound();
            }

            updatedSource.Name = source.Name;
            updatedSource.Description = source.Description;
            updatedSource.Effective_Date = source.Effective_Date;
            updatedSource.Active = source.Active;
            updatedSource.ProjectSources = source.ProjectSources;
            updatedSource.SourceFields = source.SourceFields;

            dbContext.SaveChanges();

            return new NoContentResult();
        }

        // DELETE api/Sources/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var source = dbContext.Sources.FirstOrDefault(x => x.SourceId == id);
            if (source == null)
            {
                return NotFound();
            }
            dbContext.Sources.Remove(source);
            dbContext.SaveChanges();
            return new NoContentResult();
        }
    }
}
