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
	internal class TaskConfiguration : IEntityTypeConfiguration<TaskEntity>
	{
		public void Configure(EntityTypeBuilder<TaskEntity> builder)
		{
			builder.ToTable("Tasks");

			builder.HasKey(t => t.Id);

			builder.Property(t => t.Id)
				.HasDefaultValueSql("NEWID()");

			builder.Property(t => t.Start)
				.IsRequired();

			builder.Property(t => t.End)
				.IsRequired();

			builder.Property(t => t.OneChance)
				.IsRequired();

			builder.Property(t => t.ShowAnswers)
				.IsRequired();

			builder.Property(t => t.Shuffle)
				.IsRequired();

			builder.Property(t => t.CreatedAt)
				.HasDefaultValueSql("GETDATE()");

			builder.HasOne(t => t.Test)
				.WithMany(t => t.Tasks);

			builder.HasOne(t => t.Topic)
				.WithMany(t => t.Tasks);

			builder.HasMany(t => t.Groups)
				.WithMany(g => g.Tasks)
				.UsingEntity("GroupTask");
			;
		}
	}
}
