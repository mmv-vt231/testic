using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class QuestionsTypeMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddCheckConstraint(
                name: "data_type_json",
                table: "Questions",
                sql: "ISJSON(Data)=1");

            migrationBuilder.AddCheckConstraint(
                name: "keys_type_json",
                table: "Questions",
                sql: "ISJSON(Keys)=1");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropCheckConstraint(
                name: "data_type_json",
                table: "Questions");

            migrationBuilder.DropCheckConstraint(
                name: "keys_type_json",
                table: "Questions");
        }
    }
}
