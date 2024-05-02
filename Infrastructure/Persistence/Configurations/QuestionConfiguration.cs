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
    internal class QuestionConfiguration : IEntityTypeConfiguration<Question>
    {
        public void Configure(EntityTypeBuilder<Question> builder)
        {
            builder.ToTable("Questions",
                t =>
                {
                    t.HasCheckConstraint("data_type_json", "ISJSON(Data)=1");
                    t.HasCheckConstraint("keys_type_json", "ISJSON(Keys)=1");
				});

			builder.HasKey(q => q.Id);

            builder.Property(q => q.Id)
                .HasDefaultValueSql("NEWID()");

            builder.Property(q => q.Title)
                .HasMaxLength(25555)
                .IsRequired();

            builder.Property(q => q.Image)
                .HasMaxLength(255);

            builder.Property(q => q.Points)
                .IsRequired();

            builder.Property(q => q.Type)
                .HasMaxLength(255)
                .IsRequired();

            builder.Property(q => q.Data)
                .IsRequired();

            builder.Property(q => q.Keys)
                .IsRequired();

            builder.Property(q => q.CreatedAt)
                .HasDefaultValueSql("GETDATE()");

            builder.HasOne(q => q.Test)
                .WithMany(t => t.Questions)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
