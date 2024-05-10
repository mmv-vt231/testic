using Contracts.Results;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Results.GetQuestion
{
	public record GetQuestionQuery(
		Guid ResultId
	) : IRequest<GetQuestionResponseDTO>;
}
