using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Repositories
{
    public interface ITestRepository : IRepository<Test>
    {
		Task<Test?> GetTestDetails(Guid id);
	}
}
