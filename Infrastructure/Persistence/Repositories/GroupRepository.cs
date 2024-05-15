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
        private new readonly ApplicationDbContext _context;
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

		public async Task<Group?> GetGroupResults(Guid id)
		{
            return await _context.Groups
				.Include(g => g.Tasks)
					.ThenInclude(t => t.Test)
				.Include(g => g.Students)
                    .ThenInclude(s => s.Results)
                    .ThenInclude(r => r.Task.Test)
				.AsNoTracking()
				.FirstOrDefaultAsync(g => g.Id == id);
		}
	}
}
