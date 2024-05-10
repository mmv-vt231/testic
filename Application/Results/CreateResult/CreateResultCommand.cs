using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Results.CreateResult
{
	public record CreateResultCommand(
		Guid TaskId,
		string Email
	) : IRequest<Guid>;
}
