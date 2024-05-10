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
    public class ResultRepository : Repository<Result>, IResultRepository
	{
		private new readonly ApplicationDbContext _context;
		public ResultRepository(ApplicationDbContext context) : base(context)
		{
			_context = context;
		}

		public async Task<Result?> GetResultDetails(Guid id)
		{
			return await _context.Results
				.AsNoTracking()
				.Include(r => r.Task)
				.Include(r => r.Student)
					.ThenInclude(s => s.Group)
				.Include(r => r.Task)
					.ThenInclude(t => t.Test)
					.ThenInclude(t => t.Questions)
				.SingleOrDefaultAsync(r => r.Id == id);
		}
	}
}
