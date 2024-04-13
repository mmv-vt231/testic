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
    public class TopicRepository : Repository<Topic>, ITopicRepository
    {
        private new readonly ApplicationDbContext _context;

        public TopicRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<Topic?> GetTopicDetails(Guid id)
        {
            return await _context.Topics
                .AsNoTracking()
                .FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task<IEnumerable<Topic>> GetAllUserTopics(Guid id)
        {
            return await _context.Topics
                .AsNoTracking()
                .Where(t => t.UserId == id)
                .ToListAsync();
        }
    }
}
