using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Configurations
{
    internal class ResultConfiguration : IEntityTypeConfiguration<Result>
	{
		public void Configure(EntityTypeBuilder<Result> builder)
		{
			builder.ToTable("Results", t =>
				{
					t.HasCheckConstraint("answers_type_json", "ISJSON(Answers)=1");
					t.HasCheckConstraint("questionsOrder_type_json", "ISJSON(QuestionsOrder)=1");
				});

			builder.HasKey(s => s.Id);

			builder.Property(s => s.Id)
				.HasDefaultValueSql("NEWID()");

			builder.Property(s => s.Start)
				.HasDefaultValueSql("GETDATE()");

			builder.Property(s => s.CreatedAt)
				.HasDefaultValueSql("GETDATE()");

			builder.HasOne(r => r.Task)
				.WithMany(t => t.Results)
				.OnDelete(DeleteBehavior.Cascade);

			builder.HasOne(r => r.Student)
				.WithMany(s => s.Results)
				.OnDelete(DeleteBehavior.Cascade);
		}
	}
}
