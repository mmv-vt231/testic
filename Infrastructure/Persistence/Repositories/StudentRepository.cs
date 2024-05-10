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
    public class StudentRepository : Repository<Student>, IStudentRepository
    {
        private new readonly ApplicationDbContext _context;
        public StudentRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

		public async Task<Student?> GetStudentByEmail(string email)
		{
			return await _context.Students
				.AsNoTracking()
				.Include(s => s.Group)
				.SingleOrDefaultAsync(s => s.Email == email);
		}

		public async Task<Result?> GetStudentTaskResults(Guid taskId, Guid studentId)
		{
			return await _context.Results
				.AsNoTracking()
				.SingleOrDefaultAsync(r => r.TaskId == taskId && r.StudentId == studentId);
		}
	}
}
