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
				.AsNoTracking()
				.Include(t => t.Results)
					.ThenInclude(r => r.Student)
				.Include(t => t.Groups)
					.ThenInclude(g => g.Students)
				.Include(t => t.Test)
					.ThenInclude(t => t.Questions)
				.FirstOrDefaultAsync(t => t.Id == id);
		}

		public async Task<ICollection<Group>> GetTaskGroups(ICollection<Guid> groups)
		{
			return await _context.Groups
				.AsNoTracking()
				.Where(g => groups.Contains(g.Id))
				.ToListAsync();
		}

		public async Task UpdateTaskGroups(Guid id, ICollection<Guid> groupIds)
		{
			var groups = await GetTaskGroups(groupIds);

			var task = await _context.Tasks
				.Include(t => t.Groups)
				.SingleAsync(t => t.Id == id);

			List<Group> trackedGroups = task.Groups.ToList();

			task.Groups.Clear();

			await _context.SaveChangesAsync();

			foreach (var group in trackedGroups)
			{
				_context.Entry(group).State = EntityState.Detached;
			}

			task.Groups = groups;

			await _context.SaveChangesAsync();
		}
	}
}
