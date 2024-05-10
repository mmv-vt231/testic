using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Repositories
{
    public interface IStudentRepository : IRepository<Student>
    {
        Task<Student?> GetStudentByEmail(string email);
        Task<Result?> GetStudentTaskResults(Guid studentId, Guid taskId);
    }
}
