using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GTiHub.Migrations
{
    public partial class UpdateMigration4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.AddColumn<string>(
                name: "Chain_Operation",
                table: "Conditions",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SeqNum",
                table: "Conditions",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Transformations");

            migrationBuilder.DropColumn(
                name: "Chain_Operation",
                table: "Conditions");

            migrationBuilder.DropColumn(
                name: "SeqNum",
                table: "Conditions");

            migrationBuilder.AddColumn<string>(
                name: "Note",
                table: "Transformations",
                nullable: true);
        }
    }
}
