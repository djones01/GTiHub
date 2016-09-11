using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace GTiHub.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    clientId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    creation_date = table.Column<DateTime>(nullable: false),
                    industry = table.Column<string>(nullable: true),
                    name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.clientId);
                });

            migrationBuilder.CreateTable(
                name: "Maps",
                columns: table => new
                {
                    mapId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    active = table.Column<bool>(nullable: false),
                    creation_date = table.Column<DateTime>(nullable: false),
                    description = table.Column<string>(nullable: true),
                    effective_date = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Maps", x => x.mapId);
                });

            migrationBuilder.CreateTable(
                name: "Sources",
                columns: table => new
                {
                    sourceId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    active = table.Column<bool>(nullable: false),
                    creation_date = table.Column<DateTime>(nullable: false),
                    description = table.Column<string>(nullable: true),
                    effective_date = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sources", x => x.sourceId);
                });

            migrationBuilder.CreateTable(
                name: "Targets",
                columns: table => new
                {
                    targetId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    active = table.Column<bool>(nullable: false),
                    creation_date = table.Column<DateTime>(nullable: false),
                    description = table.Column<string>(nullable: true),
                    effective_date = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Targets", x => x.targetId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    userId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    creation_date = table.Column<DateTime>(nullable: false),
                    email = table.Column<string>(nullable: true),
                    first_name = table.Column<string>(nullable: true),
                    hash = table.Column<string>(nullable: true),
                    last_name = table.Column<string>(nullable: true),
                    phone = table.Column<string>(nullable: true),
                    salt = table.Column<string>(nullable: true),
                    title = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.userId);
                });

            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    projectId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    clientId = table.Column<int>(nullable: false),
                    creation_date = table.Column<DateTime>(nullable: false),
                    description = table.Column<string>(nullable: true),
                    name = table.Column<string>(nullable: true),
                    proj_type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.projectId);
                    table.ForeignKey(
                        name: "FK_Projects_Clients_clientId",
                        column: x => x.clientId,
                        principalTable: "Clients",
                        principalColumn: "clientId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Transformations",
                columns: table => new
                {
                    transformId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    creation_date = table.Column<DateTime>(nullable: false),
                    mapId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transformations", x => x.transformId);
                    table.ForeignKey(
                        name: "FK_Transformations_Maps_mapId",
                        column: x => x.mapId,
                        principalTable: "Maps",
                        principalColumn: "mapId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SourceFields",
                columns: table => new
                {
                    sfieldId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    active = table.Column<bool>(nullable: false),
                    creation_date = table.Column<DateTime>(nullable: false),
                    datatype = table.Column<string>(nullable: true),
                    name = table.Column<string>(nullable: true),
                    sequence_num = table.Column<int>(nullable: false),
                    sourceId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SourceFields", x => x.sfieldId);
                    table.ForeignKey(
                        name: "FK_SourceFields_Sources_sourceId",
                        column: x => x.sourceId,
                        principalTable: "Sources",
                        principalColumn: "sourceId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TargetFields",
                columns: table => new
                {
                    tfieldId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    active = table.Column<bool>(nullable: false),
                    creation_date = table.Column<DateTime>(nullable: false),
                    datatype = table.Column<string>(nullable: true),
                    name = table.Column<string>(nullable: true),
                    sequence_num = table.Column<int>(nullable: false),
                    targetId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TargetFields", x => x.tfieldId);
                    table.ForeignKey(
                        name: "FK_TargetFields_Targets_targetId",
                        column: x => x.targetId,
                        principalTable: "Targets",
                        principalColumn: "targetId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProjectMaps",
                columns: table => new
                {
                    projectId = table.Column<int>(nullable: false),
                    mapId = table.Column<int>(nullable: false),
                    mapId1 = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectMaps", x => new { x.projectId, x.mapId });
                    table.ForeignKey(
                        name: "FK_ProjectMaps_Maps_mapId1",
                        column: x => x.mapId1,
                        principalTable: "Maps",
                        principalColumn: "mapId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ProjectMaps_Projects_projectId",
                        column: x => x.projectId,
                        principalTable: "Projects",
                        principalColumn: "projectId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProjectSources",
                columns: table => new
                {
                    projectId = table.Column<int>(nullable: false),
                    sourceId = table.Column<int>(nullable: false),
                    sourceId1 = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectSources", x => new { x.projectId, x.sourceId });
                    table.ForeignKey(
                        name: "FK_ProjectSources_Projects_projectId",
                        column: x => x.projectId,
                        principalTable: "Projects",
                        principalColumn: "projectId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProjectSources_Sources_sourceId1",
                        column: x => x.sourceId1,
                        principalTable: "Sources",
                        principalColumn: "sourceId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ProjectTargets",
                columns: table => new
                {
                    projectId = table.Column<int>(nullable: false),
                    targetId = table.Column<int>(nullable: false),
                    targetId1 = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectTargets", x => new { x.projectId, x.targetId });
                    table.ForeignKey(
                        name: "FK_ProjectTargets_Projects_projectId",
                        column: x => x.projectId,
                        principalTable: "Projects",
                        principalColumn: "projectId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProjectTargets_Targets_targetId1",
                        column: x => x.targetId1,
                        principalTable: "Targets",
                        principalColumn: "targetId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserProjectSecs",
                columns: table => new
                {
                    user_proj_sec_Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    access_level = table.Column<int>(nullable: false),
                    active_on_project = table.Column<bool>(nullable: false),
                    added_date = table.Column<DateTime>(nullable: false),
                    projectId = table.Column<int>(nullable: false),
                    userId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserProjectSecs", x => x.user_proj_sec_Id);
                    table.ForeignKey(
                        name: "FK_UserProjectSecs_Projects_projectId",
                        column: x => x.projectId,
                        principalTable: "Projects",
                        principalColumn: "projectId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserProjectSecs_Users_userId",
                        column: x => x.userId,
                        principalTable: "Users",
                        principalColumn: "userId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Conditions",
                columns: table => new
                {
                    condId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    cond_value = table.Column<string>(nullable: true),
                    left_paren = table.Column<string>(nullable: true),
                    operation = table.Column<string>(nullable: true),
                    right_paren = table.Column<string>(nullable: true),
                    sfieldId = table.Column<int>(nullable: false),
                    transformId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Conditions", x => x.condId);
                    table.ForeignKey(
                        name: "FK_Conditions_SourceFields_sfieldId",
                        column: x => x.sfieldId,
                        principalTable: "SourceFields",
                        principalColumn: "sfieldId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Conditions_Transformations_transformId",
                        column: x => x.transformId,
                        principalTable: "Transformations",
                        principalColumn: "transformId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Rules",
                columns: table => new
                {
                    ruleId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    creation_date = table.Column<DateTime>(nullable: false),
                    rule_value = table.Column<string>(nullable: true),
                    tfieldId = table.Column<int>(nullable: false),
                    transformId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rules", x => x.ruleId);
                    table.ForeignKey(
                        name: "FK_Rules_TargetFields_tfieldId",
                        column: x => x.tfieldId,
                        principalTable: "TargetFields",
                        principalColumn: "tfieldId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Rules_Transformations_transformId",
                        column: x => x.transformId,
                        principalTable: "Transformations",
                        principalColumn: "transformId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RuleSourceFields",
                columns: table => new
                {
                    rulesourceId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    append = table.Column<string>(nullable: true),
                    custom_format = table.Column<string>(nullable: true),
                    prepend = table.Column<string>(nullable: true),
                    ruleId = table.Column<int>(nullable: false),
                    sfieldId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RuleSourceFields", x => x.rulesourceId);
                    table.ForeignKey(
                        name: "FK_RuleSourceFields_Rules_ruleId",
                        column: x => x.ruleId,
                        principalTable: "Rules",
                        principalColumn: "ruleId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RuleSourceFields_SourceFields_sfieldId",
                        column: x => x.sfieldId,
                        principalTable: "SourceFields",
                        principalColumn: "sfieldId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Conditions_sfieldId",
                table: "Conditions",
                column: "sfieldId");

            migrationBuilder.CreateIndex(
                name: "IX_Conditions_transformId",
                table: "Conditions",
                column: "transformId");

            migrationBuilder.CreateIndex(
                name: "IX_Projects_clientId",
                table: "Projects",
                column: "clientId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectMaps_mapId1",
                table: "ProjectMaps",
                column: "mapId1");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectMaps_projectId",
                table: "ProjectMaps",
                column: "projectId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectSources_projectId",
                table: "ProjectSources",
                column: "projectId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectSources_sourceId1",
                table: "ProjectSources",
                column: "sourceId1");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectTargets_projectId",
                table: "ProjectTargets",
                column: "projectId");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectTargets_targetId1",
                table: "ProjectTargets",
                column: "targetId1");

            migrationBuilder.CreateIndex(
                name: "IX_Rules_tfieldId",
                table: "Rules",
                column: "tfieldId");

            migrationBuilder.CreateIndex(
                name: "IX_Rules_transformId",
                table: "Rules",
                column: "transformId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_RuleSourceFields_ruleId",
                table: "RuleSourceFields",
                column: "ruleId");

            migrationBuilder.CreateIndex(
                name: "IX_RuleSourceFields_sfieldId",
                table: "RuleSourceFields",
                column: "sfieldId");

            migrationBuilder.CreateIndex(
                name: "IX_SourceFields_sourceId",
                table: "SourceFields",
                column: "sourceId");

            migrationBuilder.CreateIndex(
                name: "IX_TargetFields_targetId",
                table: "TargetFields",
                column: "targetId");

            migrationBuilder.CreateIndex(
                name: "IX_Transformations_mapId",
                table: "Transformations",
                column: "mapId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProjectSecs_projectId",
                table: "UserProjectSecs",
                column: "projectId");

            migrationBuilder.CreateIndex(
                name: "IX_UserProjectSecs_userId",
                table: "UserProjectSecs",
                column: "userId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Conditions");

            migrationBuilder.DropTable(
                name: "ProjectMaps");

            migrationBuilder.DropTable(
                name: "ProjectSources");

            migrationBuilder.DropTable(
                name: "ProjectTargets");

            migrationBuilder.DropTable(
                name: "RuleSourceFields");

            migrationBuilder.DropTable(
                name: "UserProjectSecs");

            migrationBuilder.DropTable(
                name: "Rules");

            migrationBuilder.DropTable(
                name: "SourceFields");

            migrationBuilder.DropTable(
                name: "Projects");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "TargetFields");

            migrationBuilder.DropTable(
                name: "Transformations");

            migrationBuilder.DropTable(
                name: "Sources");

            migrationBuilder.DropTable(
                name: "Clients");

            migrationBuilder.DropTable(
                name: "Targets");

            migrationBuilder.DropTable(
                name: "Maps");
        }
    }
}
