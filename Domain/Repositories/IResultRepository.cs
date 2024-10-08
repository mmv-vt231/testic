﻿using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Repositories
{
    public interface IResultRepository : IRepository<Result>
	{
		Task<Result?> GetResultDetails(Guid id);
		Task<TaskEntity?> GetResultTask(Guid id);
	}
}
