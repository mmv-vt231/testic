using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tasks.UpdateTask
{
	public record UpdateTaskCommand(
		Guid Id,
		ICollection<Guid> Groups,
		DateTime Start,
		DateTime End,
		int Duration,
		bool OneChance,
		bool ShowAnswers,
		bool ShuffleQuestions
	) : IRequest;
}
