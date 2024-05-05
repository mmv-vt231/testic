using Contracts.Tasks;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tasks.GetTask
{
	public record GetTaskQuery(
		Guid Id
	) : IRequest<GetTaskResponseDTO>;
}
