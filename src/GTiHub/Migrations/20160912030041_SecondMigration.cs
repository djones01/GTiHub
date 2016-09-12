using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GTiHub.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "UserProjectSecs",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "creation_date",
                table: "UserProjectSecs",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "UserProjectSecs",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "UserProjectSecs",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "Users",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "Transformations",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "Transformations",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "Transformations",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "TargetFields",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "TargetFields",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "TargetFields",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "Targets",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "Targets",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "Targets",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "SourceFields",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "SourceFields",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "SourceFields",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "Sources",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "Sources",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "Sources",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "RuleSourceFields",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "creation_date",
                table: "RuleSourceFields",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "RuleSourceFields",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "RuleSourceFields",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "Rules",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "Rules",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "Rules",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "ProjectTargets",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "creation_date",
                table: "ProjectTargets",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "ProjectTargets",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "ProjectTargets",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "ProjectSources",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "creation_date",
                table: "ProjectSources",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "ProjectSources",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "ProjectSources",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "ProjectMaps",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "creation_date",
                table: "ProjectMaps",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "ProjectMaps",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "ProjectMaps",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "Projects",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "Projects",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "Projects",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "Maps",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "Maps",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "Maps",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "Conditions",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "creation_date",
                table: "Conditions",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "Conditions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "Conditions",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "created_by",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "date_modified",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "modified_by",
                table: "Clients",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Users",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Transformations",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "TargetFields",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Targets",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "SourceFields",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Sources",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Rules",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Projects",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Maps",
                nullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Clients",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "created_by",
                table: "UserProjectSecs");

            migrationBuilder.DropColumn(
                name: "creation_date",
                table: "UserProjectSecs");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "UserProjectSecs");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "UserProjectSecs");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "Transformations");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "Transformations");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "Transformations");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "TargetFields");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "TargetFields");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "TargetFields");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "Targets");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "Targets");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "Targets");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "SourceFields");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "SourceFields");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "SourceFields");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "Sources");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "Sources");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "Sources");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "RuleSourceFields");

            migrationBuilder.DropColumn(
                name: "creation_date",
                table: "RuleSourceFields");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "RuleSourceFields");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "RuleSourceFields");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "Rules");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "Rules");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "Rules");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "ProjectTargets");

            migrationBuilder.DropColumn(
                name: "creation_date",
                table: "ProjectTargets");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "ProjectTargets");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "ProjectTargets");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "ProjectSources");

            migrationBuilder.DropColumn(
                name: "creation_date",
                table: "ProjectSources");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "ProjectSources");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "ProjectSources");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "ProjectMaps");

            migrationBuilder.DropColumn(
                name: "creation_date",
                table: "ProjectMaps");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "ProjectMaps");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "ProjectMaps");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "Maps");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "Maps");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "Maps");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "Conditions");

            migrationBuilder.DropColumn(
                name: "creation_date",
                table: "Conditions");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "Conditions");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "Conditions");

            migrationBuilder.DropColumn(
                name: "created_by",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "date_modified",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "modified_by",
                table: "Clients");

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Users",
                nullable: false);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Transformations",
                nullable: false);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "TargetFields",
                nullable: false);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Targets",
                nullable: false);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "SourceFields",
                nullable: false);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Sources",
                nullable: false);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Rules",
                nullable: false);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Projects",
                nullable: false);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Maps",
                nullable: false);

            migrationBuilder.AlterColumn<DateTime>(
                name: "creation_date",
                table: "Clients",
                nullable: false);
        }
    }
}
