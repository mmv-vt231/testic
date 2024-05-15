using Contracts.Groups;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Groups.GetGroupResults
{
	public record GetGroupResultsQuery(
		Guid Id	
	) : IRequest<GetGroupResultsResponseDTO>;
}
