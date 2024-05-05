using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tasks.DeleteTask
{
	public record DeleteTaskCommand(
		Guid Id
	) : IRequest;
}
