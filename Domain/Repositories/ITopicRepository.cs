using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Repositories
{
    public interface ITopicRepository : IRepository<Topic>
    {
        Task<Topic?> GetTopicDetails(Guid id);
        Task<IEnumerable<TaskEntity>> GetAllTopicTasks(Guid id);
    }
}
