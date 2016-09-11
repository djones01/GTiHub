using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class GTiHubContext : DbContext
    {
        public GTiHubContext(DbContextOptions<GTiHubContext> options) : base(options)
        {
        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<Condition> Conditions { get; set; }
        public DbSet<Map> Maps { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<ProjectMap> ProjectMaps { get; set; }
        public DbSet<ProjectSource> ProjectSources { get; set; }
        public DbSet<ProjectTarget> ProjectTargets { get; set; }
        public DbSet<Rule> Rules { get; set; }
        public DbSet<RuleSourceField> RuleSourceFields { get; set; }
        public DbSet<Source> Sources { get; set; }
        public DbSet<SourceField> SourceFields { get; set; }
        public DbSet<Target> Targets { get; set; }
        public DbSet<TargetField> TargetFields { get; set; }
        public DbSet<Transformation> Transformations { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserProjectSec> UserProjectSecs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProjectMap>().HasKey(t => new { t.projectId, t.mapId });
            modelBuilder.Entity<ProjectSource>().HasKey(t => new { t.projectId, t.sourceId });
            modelBuilder.Entity<ProjectTarget>().HasKey(t => new { t.projectId, t.targetId });
        }

    }
}
