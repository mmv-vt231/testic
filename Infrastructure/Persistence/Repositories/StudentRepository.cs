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

        public async Task<IEnumerable<Student>> GetStudentsInGroupAsync(Guid id)
        {
            return await _context.Students
                .AsNoTracking()
                .Where(s => s.GroupId == id)
                .ToListAsync();
        }
    }
}
