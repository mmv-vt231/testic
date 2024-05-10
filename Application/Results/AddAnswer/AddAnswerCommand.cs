using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Results.AddAnswerResult
{
	public record AddAnswerCommand(
		Guid ResultId,
		Guid QuestionId,
		dynamic Answer
	) : IRequest;
}
