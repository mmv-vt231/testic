using Domain.Repositories;
using Domain.Entities;
using Infrastructure.Persistence.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;

namespace Infrastructure.Persistence.Repositories
{
	public class TaskRepository : Repository<TaskEntity>, ITaskRepository
	{
		private new readonly ApplicationDbContext _context;
		public TaskRepository(ApplicationDbContext context) : base(context)
		{
			_context = context;
		}

		public async Task<TaskEntity?> GetTaskDetails(Guid id)
		{
			return await _context.Tasks
				.Include(t => t.Test)
					.ThenInclude(t => t.Questions)
				.Include(t => t.Groups)
				.SingleOrDefaultAsync(t => t.Id == id);
		}

		public async Task<ICollection<Group>?> GetTaskGroups(ICollection<Guid> groups)
		{
			return await _context.Groups
				.Where(g => groups.Contains(g.Id))
				.ToListAsync();
		}

		public async Task UpdateTaskGroups(Guid id, ICollection<Guid> groupIds)
		{
			var task = await _context.Tasks
				.Include(t => t.Groups)
				.SingleAsync(t => t.Id == id);

			var groups = await GetTaskGroups(groupIds);

			task.Groups.Clear();

			foreach (var group in groups)
				task.Groups.Add(group);

			await _context.SaveChangesAsync();
		}
	}
}
