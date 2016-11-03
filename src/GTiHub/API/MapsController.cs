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

        // GET api/Maps/MapSources/5
        [HttpGet("MapSources/{id}")]
        public IEnumerable<Source> MapSources(int id)
        {
            List<Transformation> mapTransforms = dbContext.Transformations.Where(x => x.MapId == id)
                 .Include(transform => transform.Conditions)
                     .ThenInclude(condition => condition.SourceField)
                         .ThenInclude(sourceField => sourceField.Source)
                 .Include(transform => transform.Rule)
                     .ThenInclude(rule => rule.RuleSourceFields)
                         .ThenInclude(ruleSourceField => ruleSourceField.SourceField)
                             .ThenInclude(sourceField => sourceField.Source)
                 .ToList();
            List<Source> sourcesInMap = new List<Source>();
            if (mapTransforms != null)
            {
                //Iterate through a map and get all of the sources involved
                foreach (Transformation transform in mapTransforms)
                {
                    //Check conditions
                    foreach (Condition condition in transform.Conditions)
                    {
                        if (!sourcesInMap.Any(x => condition.SourceField.Source.SourceId == x.SourceId))
                        {
                            sourcesInMap.Add(condition.SourceField.Source);
                        }
                    }
                    //Check rulesourcefields
                    foreach (RuleSourceField ruleSourceField in transform.Rule.RuleSourceFields)
                    {
                        if (!sourcesInMap.Any(x => ruleSourceField.SourceField.Source.SourceId == x.SourceId))
                        {
                            sourcesInMap.Add(ruleSourceField.SourceField.Source);
                        }
                    }
                }
            }
            //Why do I need to do this for it to work????
            foreach (var source in sourcesInMap)
            {
                source.SourceFields = null;
            }
            return sourcesInMap;
        }

        // POST api/Maps
        [HttpPost]
        public IActionResult Post([FromBody]Map map)
        {
            if (map == null)
            {
                return BadRequest();
            }
            foreach(Transformation transform in map.Transformations)
            {
                foreach(Condition condition in transform.Conditions)
                {
                    condition.SourceFieldId = condition.SourceField.SourceFieldId;
                    condition.SourceField = null;
                }
                foreach(RuleSourceField ruleSourceField in transform.Rule.RuleSourceFields)
                {
                    ruleSourceField.SourceFieldId = ruleSourceField.SourceField.SourceFieldId;
                    ruleSourceField.SourceField = null;
                }
                transform.Rule.TargetFieldId = transform.Rule.TargetField.TargetFieldId;
                transform.Rule.TargetField = null;
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
