using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using GTiHub.Models.EntityModel;
using Microsoft.EntityFrameworkCore;

namespace GTiHub.Controllers.API
{
    [Route("api/[controller]")]
    public class ConditionsController : Controller
    {
        private readonly GTiHubContext _dbContext;
        public ConditionsController(GTiHubContext _dbContext)
        {
            this._dbContext = _dbContext;
        }

        // GET: api/Conditions
        [HttpGet]
        public IEnumerable<Condition> Get()
        {
            return _dbContext.Conditions.ToList();
        }

        // GET api/Conditions/5
        [HttpGet("{id}", Name = "GetCondition")]
        public IActionResult Get(int id)
        {
            var condition = _dbContext.Conditions.FirstOrDefault(x => x.ConditionId == id);
            if (condition == null)
            {
                return NotFound();
            }
            return new ObjectResult(condition);
        }

        // POST api/Conditions
        [HttpPost]
        public IActionResult Post([FromBody]Condition condition)
        {
            if (condition == null)
            {
                return BadRequest();
            }
            _dbContext.Conditions.Add(condition);
            _dbContext.SaveChanges();
            return CreatedAtRoute("GetCondition", new { id = condition.ConditionId }, condition);
        }

        // PUT api/Conditions/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Condition condition)
        {
            if (condition == null || condition.ConditionId != id)
            {
                return BadRequest();
            }

            var updatedCondition = _dbContext.Conditions.FirstOrDefault(x => x.ConditionId == id);

            if (updatedCondition == null)
            {
                return NotFound();
            }

            updatedCondition.Left_Paren = condition.Left_Paren;
            updatedCondition.Operation = condition.Operation;
            updatedCondition.Cond_Value = condition.Cond_Value;
            updatedCondition.Right_Paren = condition.Right_Paren;
            updatedCondition.SourceField = condition.SourceField;
            updatedCondition.Transformation = condition.Transformation;

            _dbContext.SaveChanges();

            return new NoContentResult();
        }

        // DELETE api/Conditions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var condition = _dbContext.Conditions.FirstOrDefault(x => x.ConditionId == id);
            if (condition == null)
            {
                return NotFound();
            }
            _dbContext.Conditions.Remove(condition);
            _dbContext.SaveChanges();
            return new NoContentResult();
        }
    }
}
