using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Results.DeleteResult
{
	public record DeleteResultCommand(
		Guid Id	
	) : IRequest;
}
