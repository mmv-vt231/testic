﻿using Domain.Entities;
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
    public class TestRepository : Repository<Test>, ITestRepository
    {
        private new readonly ApplicationDbContext _context;
        public TestRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

		public async Task<Test?> GetTestDetails(Guid id)
		{
            return await _context.Tests
                .Include(t => t.Questions)
                .AsNoTracking()
                .FirstOrDefaultAsync(t => t.Id == id);
		}

		public async Task DeleteTestTasks(Guid id)
		{
			var tasks = await _context.Tasks
			   .AsNoTracking()
			   .Where(t => t.TestId == id)
			   .ToListAsync();

			if(tasks is not null)
			{
				_context.RemoveRange(tasks);
			}

			await _context.SaveChangesAsync();
		}
	}
}
