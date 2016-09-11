using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using GTiHub.Models.EntityModel;

namespace GTiHub.Migrations
{
    [DbContext(typeof(GTiHubContext))]
    [Migration("20160911212241_FirstMigration")]
    partial class FirstMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rtm-21431")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("GTiHub.Models.EntityModel.Client", b =>
                {
                    b.Property<int>("clientId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("creation_date");

                    b.Property<string>("industry");

                    b.Property<string>("name");

                    b.HasKey("clientId");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Condition", b =>
                {
                    b.Property<int>("condId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("cond_value");

                    b.Property<string>("left_paren");

                    b.Property<string>("operation");

                    b.Property<string>("right_paren");

                    b.Property<int>("sfieldId");

                    b.Property<int>("transformId");

                    b.HasKey("condId");

                    b.HasIndex("sfieldId");

                    b.HasIndex("transformId");

                    b.ToTable("Conditions");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Map", b =>
                {
                    b.Property<int>("mapId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("active");

                    b.Property<DateTime>("creation_date");

                    b.Property<string>("description");

                    b.Property<DateTime>("effective_date");

                    b.HasKey("mapId");

                    b.ToTable("Maps");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Project", b =>
                {
                    b.Property<int>("projectId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("clientId");

                    b.Property<DateTime>("creation_date");

                    b.Property<string>("description");

                    b.Property<string>("name");

                    b.Property<string>("proj_type");

                    b.HasKey("projectId");

                    b.HasIndex("clientId");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.ProjectMap", b =>
                {
                    b.Property<int>("projectId");

                    b.Property<int>("mapId");

                    b.Property<int?>("mapId1");

                    b.HasKey("projectId", "mapId");

                    b.HasIndex("mapId1");

                    b.HasIndex("projectId");

                    b.ToTable("ProjectMaps");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.ProjectSource", b =>
                {
                    b.Property<int>("projectId");

                    b.Property<int>("sourceId");

                    b.Property<int?>("sourceId1");

                    b.HasKey("projectId", "sourceId");

                    b.HasIndex("projectId");

                    b.HasIndex("sourceId1");

                    b.ToTable("ProjectSources");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.ProjectTarget", b =>
                {
                    b.Property<int>("projectId");

                    b.Property<int>("targetId");

                    b.Property<int?>("targetId1");

                    b.HasKey("projectId", "targetId");

                    b.HasIndex("projectId");

                    b.HasIndex("targetId1");

                    b.ToTable("ProjectTargets");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Rule", b =>
                {
                    b.Property<int>("ruleId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("creation_date");

                    b.Property<string>("rule_value");

                    b.Property<int>("tfieldId");

                    b.Property<int>("transformId");

                    b.HasKey("ruleId");

                    b.HasIndex("tfieldId");

                    b.HasIndex("transformId")
                        .IsUnique();

                    b.ToTable("Rules");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.RuleSourceField", b =>
                {
                    b.Property<int>("rulesourceId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("append");

                    b.Property<string>("custom_format");

                    b.Property<string>("prepend");

                    b.Property<int>("ruleId");

                    b.Property<int>("sfieldId");

                    b.HasKey("rulesourceId");

                    b.HasIndex("ruleId");

                    b.HasIndex("sfieldId");

                    b.ToTable("RuleSourceFields");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Source", b =>
                {
                    b.Property<int>("sourceId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("active");

                    b.Property<DateTime>("creation_date");

                    b.Property<string>("description");

                    b.Property<DateTime>("effective_date");

                    b.HasKey("sourceId");

                    b.ToTable("Sources");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.SourceField", b =>
                {
                    b.Property<int>("sfieldId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("active");

                    b.Property<DateTime>("creation_date");

                    b.Property<string>("datatype");

                    b.Property<string>("name");

                    b.Property<int>("sequence_num");

                    b.Property<int>("sourceId");

                    b.HasKey("sfieldId");

                    b.HasIndex("sourceId");

                    b.ToTable("SourceFields");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Target", b =>
                {
                    b.Property<int>("targetId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("active");

                    b.Property<DateTime>("creation_date");

                    b.Property<string>("description");

                    b.Property<DateTime>("effective_date");

                    b.HasKey("targetId");

                    b.ToTable("Targets");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.TargetField", b =>
                {
                    b.Property<int>("tfieldId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("active");

                    b.Property<DateTime>("creation_date");

                    b.Property<string>("datatype");

                    b.Property<string>("name");

                    b.Property<int>("sequence_num");

                    b.Property<int>("targetId");

                    b.HasKey("tfieldId");

                    b.HasIndex("targetId");

                    b.ToTable("TargetFields");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Transformation", b =>
                {
                    b.Property<int>("transformId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("creation_date");

                    b.Property<int>("mapId");

                    b.HasKey("transformId");

                    b.HasIndex("mapId");

                    b.ToTable("Transformations");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.User", b =>
                {
                    b.Property<int>("userId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("creation_date");

                    b.Property<string>("email");

                    b.Property<string>("first_name");

                    b.Property<string>("hash");

                    b.Property<string>("last_name");

                    b.Property<string>("phone");

                    b.Property<string>("salt");

                    b.Property<string>("title");

                    b.HasKey("userId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.UserProjectSec", b =>
                {
                    b.Property<int>("user_proj_sec_Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("access_level");

                    b.Property<bool>("active_on_project");

                    b.Property<DateTime>("added_date");

                    b.Property<int>("projectId");

                    b.Property<int>("userId");

                    b.HasKey("user_proj_sec_Id");

                    b.HasIndex("projectId");

                    b.HasIndex("userId");

                    b.ToTable("UserProjectSecs");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Condition", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.SourceField", "SourceField")
                        .WithMany("Conditions")
                        .HasForeignKey("sfieldId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GTiHub.Models.EntityModel.Transformation", "Transformation")
                        .WithMany("Conditions")
                        .HasForeignKey("transformId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Project", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Client", "Client")
                        .WithMany("Projects")
                        .HasForeignKey("clientId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.ProjectMap", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Map")
                        .WithMany("ProjectMaps")
                        .HasForeignKey("mapId1");

                    b.HasOne("GTiHub.Models.EntityModel.Project")
                        .WithMany("ProjectMaps")
                        .HasForeignKey("projectId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.ProjectSource", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Project")
                        .WithMany("ProjectSources")
                        .HasForeignKey("projectId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GTiHub.Models.EntityModel.Source")
                        .WithMany("ProjectSources")
                        .HasForeignKey("sourceId1");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.ProjectTarget", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Project")
                        .WithMany("ProjectTargets")
                        .HasForeignKey("projectId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GTiHub.Models.EntityModel.Target")
                        .WithMany("ProjectTargets")
                        .HasForeignKey("targetId1");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Rule", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.TargetField", "TargetField")
                        .WithMany("Rules")
                        .HasForeignKey("tfieldId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GTiHub.Models.EntityModel.Transformation", "Transformation")
                        .WithOne("Rule")
                        .HasForeignKey("GTiHub.Models.EntityModel.Rule", "transformId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.RuleSourceField", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Rule", "Rule")
                        .WithMany("RuleSourceFields")
                        .HasForeignKey("ruleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GTiHub.Models.EntityModel.SourceField", "SourceField")
                        .WithMany("RuleSourceFields")
                        .HasForeignKey("sfieldId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.SourceField", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Source", "Source")
                        .WithMany("SourceFields")
                        .HasForeignKey("sourceId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.TargetField", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Target", "Target")
                        .WithMany("TargetFields")
                        .HasForeignKey("targetId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Transformation", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Map", "Map")
                        .WithMany("Transformations")
                        .HasForeignKey("mapId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.UserProjectSec", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Project", "Project")
                        .WithMany("UserProjectSecs")
                        .HasForeignKey("projectId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GTiHub.Models.EntityModel.User", "User")
                        .WithMany("UserProjectSecs")
                        .HasForeignKey("userId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
