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
    public class UserRepository : Repository<User>, IUserRepository
    {
        private new readonly ApplicationDbContext _context;
        public UserRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<User?> GetByEmailAsync(string email)
        {
            return await _context.Users.SingleOrDefaultAsync(x => x.Email == email);
        }
        public async Task<IEnumerable<Topic>> GetAllUserTopics(Guid id)
        {
            return await _context.Topics
                .AsNoTracking()
                .Where(t => t.UserId == id)
                .ToListAsync();
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
