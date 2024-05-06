using Domain.Entities;
using Domain.Repositories;
using Infrastructure.Persistence.Database;
using Microsoft.EntityFrameworkCore;

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
                .SingleOrDefaultAsync(t => t.Id == id);
        }
		public async Task<IEnumerable<Test>> GetAllTopicTests(Guid id)
		{
			return await _context.Tests
				.AsNoTracking()
				.Include(t => t.Questions)
				.Where(t => t.TopicId == id)
				.ToListAsync();
		}
		public async Task<IEnumerable<TaskEntity>> GetAllTopicTasks(Guid id)
		{
			return await _context.Tasks
				.AsNoTracking()
				.Include(t => t.Test)
                .Include(t => t.Groups)
				.Where(t => t.TopicId == id)
                .OrderByDescending(t => t.CreatedAt)
				.ToListAsync();
		}
	}
}
