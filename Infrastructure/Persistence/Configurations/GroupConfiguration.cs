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
    internal class GroupConfiguration : IEntityTypeConfiguration<Group>
    {
        public void Configure(EntityTypeBuilder<Group> builder)
        {
            builder.ToTable("Groups");

            builder.HasKey(g => g.Id);

            builder.Property(g => g.Id)
                .HasDefaultValueSql("NEWID()");

            builder.Property(g => g.Name)
                .IsRequired()
                .HasMaxLength(255);

            builder.HasOne(g => g.User)
                .WithMany(u => u.Groups)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
