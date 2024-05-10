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
    internal class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("Users");

            builder.HasKey(u => u.Id);

            builder.Property (u => u.Id)
                .HasDefaultValueSql("NEWID()");

            builder.Property(u => u.Name)
                .HasMaxLength(255);

            builder.Property(u => u.Surname)
                .HasMaxLength(255);

            builder.Property(u => u.Email)
                .HasMaxLength(255);

            builder.Property(u => u.Password)
                .HasMaxLength(255);

            builder.Property(u => u.CreatedAt)
                .HasDefaultValueSql("GETDATE()");

        }   
    }
}
