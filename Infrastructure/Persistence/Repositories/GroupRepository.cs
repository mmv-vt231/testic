using Domain.Entities;
using Domain.Repositories;
using Infrastructure.Persistence.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repositories
{
    public class GroupRepository : Repository<Group>, IGroupRepository
    {
        private readonly ApplicationDbContext _context;

        public GroupRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

        public override async Task<Group?> GetByIdAsync(Guid id)
        {
            return await _context.Groups
                .Include(g => g.Students)
                .AsNoTracking()
                .FirstOrDefaultAsync(q => q.Id == id);
        }

        public async Task<IEnumerable<Group>> GetAllUserGroups(Guid id)
        {
            return await _context.Groups
                .Include(g => g.Students)
                .Where(g => g.UserId == id)
                .OrderByDescending(g => g.CreatedAt)
                .AsNoTracking()
                .ToListAsync();
        }
    }
}
