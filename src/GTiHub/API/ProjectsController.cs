using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GTiHub.Models.EntityModel;

namespace GTiHub.Controllers.API
{
    [Route("api/[controller]")]
    public class ProjectsController : Controller
    {
        private readonly GTiHubContext _dbContext;
        public ProjectsController(GTiHubContext _dbContext)
        {
            this._dbContext = _dbContext;
        }

        // GET: api/Projects
        [HttpGet]
        public IEnumerable<Project> Get()
        {
            return _dbContext.Projects.ToList();
        }

        // GET api/Projects/5
        [HttpGet("{id}", Name = "GetProject")]
        public IActionResult Get(int id)
        {
            var project = _dbContext.Projects.FirstOrDefault(x => x.ProjectId == id);
            if (project == null)
            {
                return NotFound();
            }
            return new ObjectResult(project);
        }

        // POST api/Projects
        [HttpPost]
        public IActionResult Post([FromBody]Project project)
        {
            if (project == null)
            {
                return BadRequest();
            }
            _dbContext.Projects.Add(project);
            _dbContext.SaveChanges();
            return CreatedAtRoute("GetProject", new { id = project.ProjectId }, project);
        }

        // PUT api/Projects/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Project project)
        {
            if (project == null || project.ProjectId != id)
            {
                return BadRequest();
            }

            var updatedProject = _dbContext.Projects.FirstOrDefault(x => x.ProjectId == id);

            if (updatedProject == null)
            {
                return NotFound();
            }

            updatedProject.Name = project.Name;
            updatedProject.Description = project.Description;
            updatedProject.Project_Type = project.Project_Type;
            updatedProject.Client = project.Client;
            updatedProject.ProjectMaps = project.ProjectMaps;
            updatedProject.ProjectSources = project.ProjectSources;
            updatedProject.ProjectTargets = project.ProjectTargets;
            updatedProject.UserProjectSecs = project.UserProjectSecs;

            _dbContext.SaveChanges();

            return new NoContentResult();
        }

        // DELETE api/Projects/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var project = _dbContext.Projects.FirstOrDefault(x => x.ProjectId == id);
            if (project == null)
            {
                return NotFound();
            }
            _dbContext.Projects.Remove(project);
            _dbContext.SaveChanges();
            return new NoContentResult();
        }
    }
}
