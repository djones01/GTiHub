using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GTiHub.Migrations
{
    public partial class UpdateMigration5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Alt_Value",
                table: "Rules",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Rule_Operation",
                table: "Rules",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Alt_Value",
                table: "Rules");

            migrationBuilder.DropColumn(
                name: "Rule_Operation",
                table: "Rules");
        }
    }
}
