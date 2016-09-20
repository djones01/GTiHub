using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GTiHub.Migrations
{
    public partial class UpdateMigration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProjectMaps_Maps_MapId1",
                table: "ProjectMaps");

            migrationBuilder.DropIndex(
                name: "IX_ProjectMaps_MapId1",
                table: "ProjectMaps");

            migrationBuilder.DropColumn(
                name: "MapId1",
                table: "ProjectMaps");

            migrationBuilder.CreateIndex(
                name: "IX_ProjectMaps_MapId",
                table: "ProjectMaps",
                column: "MapId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectMaps_Maps_MapId",
                table: "ProjectMaps",
                column: "MapId",
                principalTable: "Maps",
                principalColumn: "MapId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProjectMaps_Maps_MapId",
                table: "ProjectMaps");

            migrationBuilder.DropIndex(
                name: "IX_ProjectMaps_MapId",
                table: "ProjectMaps");

            migrationBuilder.AddColumn<int>(
                name: "MapId1",
                table: "ProjectMaps",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProjectMaps_MapId1",
                table: "ProjectMaps",
                column: "MapId1");

            migrationBuilder.AddForeignKey(
                name: "FK_ProjectMaps_Maps_MapId1",
                table: "ProjectMaps",
                column: "MapId1",
                principalTable: "Maps",
                principalColumn: "MapId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
