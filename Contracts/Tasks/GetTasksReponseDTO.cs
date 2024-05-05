using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Tasks
{
	public record GetTasksReponseDTO(
		Guid Id,
		DateTime Start,
		DateTime End,
		IEnumerable<GetTasksGroupDTO>? Groups
	);

	public record GetTasksGroupDTO(
		Guid Id,
		string Name
	);
}
