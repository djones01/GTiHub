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
        private readonly GTiHubContext dbContext;
        public ConditionsController(GTiHubContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET: api/Conditions
        [HttpGet]
        public IEnumerable<Condition> Get()
        {
            return dbContext.Conditions.ToList();
        }

        // GET api/Conditions/5
        [HttpGet("{id}", Name = "GetCondition")]
        public IActionResult Get(int id)
        {
            var condition = dbContext.Conditions.FirstOrDefault(x => x.ConditionId == id);
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
            dbContext.Conditions.Add(condition);
            dbContext.SaveChanges();
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

            var updatedCondition = dbContext.Conditions.FirstOrDefault(x => x.ConditionId == id);

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

            dbContext.SaveChanges();

            return new NoContentResult();
        }

        // DELETE api/Conditions/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var condition = dbContext.Conditions.FirstOrDefault(x => x.ConditionId == id);
            if (condition == null)
            {
                return NotFound();
            }
            dbContext.Conditions.Remove(condition);
            dbContext.SaveChanges();
            return new NoContentResult();
        }
    }
}
