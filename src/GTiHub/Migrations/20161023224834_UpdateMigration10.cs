using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GTiHub.Migrations
{
    public partial class UpdateMigration10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Conditions_SourceFields_SourceFieldId",
                table: "Conditions");

            migrationBuilder.DropForeignKey(
                name: "FK_RuleSourceFields_SourceFields_SourceFieldId",
                table: "RuleSourceFields");

            migrationBuilder.AlterColumn<int>(
                name: "SourceFieldId",
                table: "RuleSourceFields",
                nullable: false);

            migrationBuilder.AlterColumn<int>(
                name: "SourceFieldId",
                table: "Conditions",
                nullable: false);

            migrationBuilder.AddForeignKey(
                name: "FK_Conditions_SourceFields_SourceFieldId",
                table: "Conditions",
                column: "SourceFieldId",
                principalTable: "SourceFields",
                principalColumn: "SourceFieldId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_RuleSourceFields_SourceFields_SourceFieldId",
                table: "RuleSourceFields",
                column: "SourceFieldId",
                principalTable: "SourceFields",
                principalColumn: "SourceFieldId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Conditions_SourceFields_SourceFieldId",
                table: "Conditions");

            migrationBuilder.DropForeignKey(
                name: "FK_RuleSourceFields_SourceFields_SourceFieldId",
                table: "RuleSourceFields");

            migrationBuilder.AlterColumn<int>(
                name: "SourceFieldId",
                table: "RuleSourceFields",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SourceFieldId",
                table: "Conditions",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Conditions_SourceFields_SourceFieldId",
                table: "Conditions",
                column: "SourceFieldId",
                principalTable: "SourceFields",
                principalColumn: "SourceFieldId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_RuleSourceFields_SourceFields_SourceFieldId",
                table: "RuleSourceFields",
                column: "SourceFieldId",
                principalTable: "SourceFields",
                principalColumn: "SourceFieldId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
