using Contracts.Tasks;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tasks.GetTasks
{
	public record GetTasksQuery(
		Guid Id
	) : IRequest<IEnumerable<GetTasksReponseDTO>>;
}
