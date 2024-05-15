using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Repositories
{
    public interface IGroupRepository : IRepository<Group>
    {
        Task<Group?> GetGroupResults(Guid Id);
    }
}
