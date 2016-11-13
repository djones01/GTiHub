using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GTiHub.Models.EntityModel;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace GTiHub.Controllers.API
{
    [Route("api/[controller]")]
    public class TargetsController : Controller
    {
        private readonly GTiHubContext _dbContext;
        public TargetsController(GTiHubContext _dbContext)
        {
            this._dbContext = _dbContext;
        }

        // GET: api/Targets
        [HttpGet]
        public IEnumerable<Target> Get()
        {
            return _dbContext.Targets.ToList();
        }

        // GET api/Targets/5
        [HttpGet("{id}",Name = "GetTarget")]
        public IActionResult Get(int id)
        {
            var target = _dbContext.Targets.FirstOrDefault(x => x.TargetId == id);
            if (target == null)
            {
                return NotFound();
            }
            return new ObjectResult(target);
        }

        // GET api/values/5
        [HttpGet("GetTargetFieldsbyTarget/{id}")]
        public IEnumerable<TargetField> GetTargetFieldsByTarget(int id)
        {
            return _dbContext.TargetFields.Where(x => x.TargetId == id).OrderBy(x => x.SeqNum).ToList();
        }

        // POST api/Targets
        [HttpPost]
        public IActionResult Post([FromBody]Target target)
        {
            if (target == null)
            {
                return BadRequest();
            }
            _dbContext.Targets.Add(target);
            _dbContext.SaveChanges();
            return CreatedAtRoute("GetTarget", new { id = target.TargetId }, target);
        }

        // PUT api/Targets/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Target target)
        {
            if (target == null || target.TargetId != id)
            {
                return BadRequest();
            }

            var updatedTarget = _dbContext.Targets.FirstOrDefault(x => x.TargetId == id);

            if (updatedTarget == null)
            {
                return NotFound();
            }

            updatedTarget.Name = target.Name;
            updatedTarget.Description = target.Description;
            updatedTarget.Effective_Date = target.Effective_Date;
            updatedTarget.Active = target.Active;
            updatedTarget.ProjectTargets = target.ProjectTargets;
            updatedTarget.TargetFields = target.TargetFields;

            _dbContext.SaveChanges();

            return new NoContentResult();
        }

        // DELETE api/Targets/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var target = _dbContext.Targets.FirstOrDefault(x => x.TargetId == id);
            if (target == null)
            {
                return NotFound();
            }
            _dbContext.Targets.Remove(target);
            _dbContext.SaveChanges();
            return new NoContentResult();
        }
    }
}
