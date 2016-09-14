﻿using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GTiHub.Models.EntityModel;

namespace GTiHub.Controllers.API
{
    [Route("api/[controller]")]
    public class ProjectsController : Controller
    {
        private readonly GTiHubContext dbContext;
        public ProjectsController(GTiHubContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // GET: api/Projects
        [HttpGet]
        public IEnumerable<Project> Get()
        {
            return dbContext.Projects.ToList();
        }

        // GET api/Projects/5
        [HttpGet("{id}", Name = "GetProject")]
        public IActionResult Get(int id)
        {
            var project = dbContext.Projects.FirstOrDefault(x => x.projectId == id);
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
            dbContext.Projects.Add(project);
            dbContext.SaveChanges();
            return CreatedAtRoute("GetProject", new { id = project.projectId }, project);
        }

        // PUT api/Projects/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Project project)
        {
            if (project == null || project.projectId != id)
            {
                return BadRequest();
            }

            var updatedProject = dbContext.Projects.FirstOrDefault(x => x.projectId == id);

            if (updatedProject == null)
            {
                return NotFound();
            }

            updatedProject.name = project.name;
            updatedProject.description = project.description;
            updatedProject.proj_type = project.proj_type;
            updatedProject.Client = project.Client;
            updatedProject.ProjectMaps = project.ProjectMaps;
            updatedProject.ProjectSources = project.ProjectSources;
            updatedProject.ProjectTargets = project.ProjectTargets;
            updatedProject.UserProjectSecs = project.UserProjectSecs;

            dbContext.SaveChanges();

            return new NoContentResult();
        }

        // DELETE api/Projects/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var project = dbContext.Projects.FirstOrDefault(x => x.projectId == id);
            if (project == null)
            {
                return NotFound();
            }
            dbContext.Projects.Remove(project);
            return new NoContentResult();
        }
    }
}