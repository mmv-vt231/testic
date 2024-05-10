using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tasks.CreateTask
{
	public record CreateTaskCommand(
		Guid TestId,
		Guid TopicId,
		List<Guid> Groups,
		DateTime Start,
		DateTime End,
		int Duration,
		bool OneChance,
		bool ShowAnswers,
		bool ShuffleQuestions
	) : IRequest;
}
