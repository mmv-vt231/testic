using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class ResultConfigurationMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Shuffle",
                table: "Tasks",
                newName: "ShuffleQuestions");

            migrationBuilder.AddColumn<bool>(
                name: "ShuffleAnswers",
                table: "Tasks",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "QuestionsOrder",
                table: "Results",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddCheckConstraint(
                name: "questionsOrder_type_json",
                table: "Results",
                sql: "ISJSON(QuestionsOrder)=1");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropCheckConstraint(
                name: "questionsOrder_type_json",
                table: "Results");

            migrationBuilder.DropColumn(
                name: "ShuffleAnswers",
                table: "Tasks");

            migrationBuilder.DropColumn(
                name: "QuestionsOrder",
                table: "Results");

            migrationBuilder.RenameColumn(
                name: "ShuffleQuestions",
                table: "Tasks",
                newName: "Shuffle");
        }
    }
}
