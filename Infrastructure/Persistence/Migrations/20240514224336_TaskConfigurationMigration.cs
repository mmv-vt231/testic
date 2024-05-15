using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class TaskConfigurationMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Tests_TestId",
                table: "Tasks");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Tests_TestId",
                table: "Tasks",
                column: "TestId",
                principalTable: "Tests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tasks_Tests_TestId",
                table: "Tasks");

            migrationBuilder.AddForeignKey(
                name: "FK_Tasks_Tests_TestId",
                table: "Tasks",
                column: "TestId",
                principalTable: "Tests",
                principalColumn: "Id");
        }
    }
}
