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
    public class TestConfiguration : IEntityTypeConfiguration<Test>
    {
        public void Configure(EntityTypeBuilder<Test> builder)
        {
            builder.ToTable("Tests");

            builder.HasKey(t => t.Id);

            builder.Property(t => t.Id)
                .HasDefaultValueSql("NEWID()");

            builder.Property(t => t.Title)
                .HasMaxLength(255);

            builder.Property(t => t.CreatedAt)
                .HasDefaultValueSql("GETDATE()");

            builder.HasOne(t => t.Topic)
                .WithMany(t => t.Tests)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
