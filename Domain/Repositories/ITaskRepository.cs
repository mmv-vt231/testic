using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Domain.Repositories
{
	public interface ITaskRepository : IRepository<TaskEntity>
	{
		Task<TaskEntity?> GetTaskDetails(Guid id);
		Task<ICollection<Group>> GetTaskGroups(ICollection<Guid> groups);
		Task UpdateTaskGroups(Guid id, ICollection<Guid> groups);
	}
}
