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
    internal class StudentConfiguration : IEntityTypeConfiguration<Student>
    {
        public void Configure(EntityTypeBuilder<Student> builder)
        {
            builder.ToTable("Students");

            builder.HasKey(s => s.Id);

            builder.Property(s => s.Id)
                .HasDefaultValueSql("NEWID()");

            builder.Property(s => s.FullName)
                .IsRequired()
                .HasMaxLength(255);

            builder.Property(s => s.Email)
                .IsRequired()
                .HasMaxLength(255);

            builder.Property(u => u.CreatedAt)
                .HasDefaultValueSql("GETDATE()");

            builder.HasOne(s => s.Group)
                .WithMany(g => g.Students)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
