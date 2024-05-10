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
    internal class TopicConfiguration : IEntityTypeConfiguration<Topic>
    {
        public void Configure(EntityTypeBuilder<Topic> builder)
        {
            builder.ToTable("Topics");

            builder.HasKey(t => t.Id);

            builder.Property(t => t.Id)
                .HasDefaultValueSql("NEWID()");

            builder.Property(t => t.Title)
                .HasMaxLength(255);

            builder.Property(t => t.CreatedAt)
                .HasDefaultValueSql("GETDATE()");

            builder.HasOne(t => t.User)
                .WithMany(u => u.Topics)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
