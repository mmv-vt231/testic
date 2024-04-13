using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Database
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) 
            : base(options) 
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);

            //var allEntities = modelBuilder.Model.GetEntityTypes();

            //foreach (var entity in allEntities)
            //{
            //    entity.AddProperty("CreatedAt", typeof(DateTime));
            //}
        }

        //public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        //{
        //    var entries = ChangeTracker.Entries().Where(e => e.State == EntityState.Added);

        //    foreach (var entityEntry in entries)
        //    {
        //        entityEntry.Property("CreatedAt").CurrentValue = DateTime.UtcNow;
        //    }

        //    return base.SaveChangesAsync(cancellationToken);
        //}
    }
}
