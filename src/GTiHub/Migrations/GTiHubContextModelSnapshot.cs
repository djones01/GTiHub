using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using GTiHub.Models.EntityModel;

namespace GTiHub.Migrations
{
    [DbContext(typeof(GTiHubContext))]
    partial class GTiHubContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("GTiHub.Models.EntityModel.Client", b =>
                {
                    b.Property<int>("ClientId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Industry");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.HasKey("ClientId");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Condition", b =>
                {
                    b.Property<int>("ConditionId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Cond_Value");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Left_Paren");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Operation");

                    b.Property<string>("Right_Paren");

                    b.Property<int>("SourceFieldId");

                    b.Property<int>("TransformationId");

                    b.HasKey("ConditionId");

                    b.HasIndex("SourceFieldId");

                    b.HasIndex("TransformationId");

                    b.ToTable("Conditions");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Map", b =>
                {
                    b.Property<int>("MapId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Description");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<string>("Modified_By");

                    b.HasKey("MapId");

                    b.ToTable("Maps");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Project", b =>
                {
                    b.Property<int>("ProjectId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ClientId");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Description");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.Property<string>("Project_Type");

                    b.HasKey("ProjectId");

                    b.HasIndex("ClientId");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.ProjectMap", b =>
                {
                    b.Property<int>("ProjectId");

                    b.Property<int>("MapId");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.HasKey("ProjectId", "MapId");

                    b.HasIndex("MapId");

                    b.HasIndex("ProjectId");

                    b.ToTable("ProjectMaps");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.ProjectSource", b =>
                {
                    b.Property<int>("ProjectId");

                    b.Property<int>("SourceId");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.HasKey("ProjectId", "SourceId");

                    b.HasIndex("ProjectId");

                    b.HasIndex("SourceId");

                    b.ToTable("ProjectSources");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.ProjectTarget", b =>
                {
                    b.Property<int>("ProjectId");

                    b.Property<int>("TargetId");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.HasKey("ProjectId", "TargetId");

                    b.HasIndex("ProjectId");

                    b.HasIndex("TargetId");

                    b.ToTable("ProjectTargets");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Rule", b =>
                {
                    b.Property<int>("RuleId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Rule_Value");

                    b.Property<int>("TargetFieldId");

                    b.Property<int>("TransformationId");

                    b.HasKey("RuleId");

                    b.HasIndex("TargetFieldId");

                    b.ToTable("Rules");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.RuleSourceField", b =>
                {
                    b.Property<int>("RuleSourceFieldId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Append");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<string>("Custom_Format");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Prepend");

                    b.Property<int>("RuleId");

                    b.Property<int>("SourceFieldId");

                    b.HasKey("RuleSourceFieldId");

                    b.HasIndex("RuleId");

                    b.HasIndex("SourceFieldId");

                    b.ToTable("RuleSourceFields");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Source", b =>
                {
                    b.Property<int>("SourceId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Description");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.HasKey("SourceId");

                    b.ToTable("Sources");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.SourceField", b =>
                {
                    b.Property<int>("SourceFieldId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<string>("Datatype");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.Property<int>("SeqNum");

                    b.Property<int>("SourceId");

                    b.HasKey("SourceFieldId");

                    b.HasIndex("SourceId");

                    b.ToTable("SourceFields");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Target", b =>
                {
                    b.Property<int>("TargetId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Description");

                    b.Property<DateTime>("Effective_Date");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.HasKey("TargetId");

                    b.ToTable("Targets");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.TargetField", b =>
                {
                    b.Property<int>("TargetFieldId")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Active");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<string>("Datatype");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Name");

                    b.Property<int>("SeqNum");

                    b.Property<int>("TargetId");

                    b.HasKey("TargetFieldId");

                    b.HasIndex("TargetId");

                    b.ToTable("TargetFields");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Transformation", b =>
                {
                    b.Property<int>("TransformationId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<int>("MapId");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Note");

                    b.Property<int>("RuleId");

                    b.HasKey("TransformationId");

                    b.HasIndex("MapId");

                    b.HasIndex("RuleId")
                        .IsUnique();

                    b.ToTable("Transformations");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Email");

                    b.Property<string>("FirstName");

                    b.Property<string>("Hash");

                    b.Property<string>("LastName");

                    b.Property<string>("Modified_By");

                    b.Property<string>("Phone");

                    b.Property<string>("Salt");

                    b.Property<string>("Title");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.UserProjectSec", b =>
                {
                    b.Property<int>("UserProjSecId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Access_Level");

                    b.Property<bool>("Active_On_Project");

                    b.Property<DateTime>("Added_Date");

                    b.Property<string>("Created_By");

                    b.Property<DateTime?>("Creation_Date");

                    b.Property<DateTime?>("Date_Modified");

                    b.Property<string>("Modified_By");

                    b.Property<int>("ProjectId");

                    b.Property<int>("UserId");

                    b.HasKey("UserProjSecId");

                    b.HasIndex("ProjectId");

                    b.HasIndex("UserId");

                    b.ToTable("UserProjectSecs");
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Condition", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.SourceField", "SourceField")
                        .WithMany("Conditions")
                        .HasForeignKey("SourceFieldId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GTiHub.Models.EntityModel.Transformation", "Transformation")
                        .WithMany("Conditions")
                        .HasForeignKey("TransformationId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Project", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Client", "Client")
                        .WithMany("Projects")
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.ProjectMap", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Map", "Map")
                        .WithMany("ProjectMaps")
                        .HasForeignKey("MapId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GTiHub.Models.EntityModel.Project", "Project")
                        .WithMany("ProjectMaps")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.ProjectSource", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Project", "Project")
                        .WithMany("ProjectSources")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GTiHub.Models.EntityModel.Source", "Source")
                        .WithMany("ProjectSources")
                        .HasForeignKey("SourceId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.ProjectTarget", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Project", "Project")
                        .WithMany("ProjectTargets")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GTiHub.Models.EntityModel.Target", "Target")
                        .WithMany("ProjectTargets")
                        .HasForeignKey("TargetId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Rule", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.TargetField", "TargetField")
                        .WithMany("Rules")
                        .HasForeignKey("TargetFieldId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.RuleSourceField", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Rule", "Rule")
                        .WithMany("RuleSourceFields")
                        .HasForeignKey("RuleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GTiHub.Models.EntityModel.SourceField", "SourceField")
                        .WithMany("RuleSourceFields")
                        .HasForeignKey("SourceFieldId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.SourceField", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Source", "Source")
                        .WithMany("SourceFields")
                        .HasForeignKey("SourceId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.TargetField", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Target", "Target")
                        .WithMany("TargetFields")
                        .HasForeignKey("TargetId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.Transformation", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Map", "Map")
                        .WithMany("Transformations")
                        .HasForeignKey("MapId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GTiHub.Models.EntityModel.Rule", "Rule")
                        .WithOne("Transformation")
                        .HasForeignKey("GTiHub.Models.EntityModel.Transformation", "RuleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("GTiHub.Models.EntityModel.UserProjectSec", b =>
                {
                    b.HasOne("GTiHub.Models.EntityModel.Project", "Project")
                        .WithMany("UserProjectSecs")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("GTiHub.Models.EntityModel.User", "User")
                        .WithMany("UserProjectSecs")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
