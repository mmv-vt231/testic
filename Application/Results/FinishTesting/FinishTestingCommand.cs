using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Results.FinishTesting
{
	public record FinishTestingCommand(
		Guid ResultId	
	) : IRequest;
}
