using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        Task<User?> GetByEmailAsync(string email);
        Task<IEnumerable<Topic>> GetAllUserTopics(Guid id);
        Task<IEnumerable<Group>> GetAllUserGroups(Guid id);
    }
}
