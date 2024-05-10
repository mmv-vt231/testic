using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Tasks
{
	public record GetTaskResponseDTO(
		string Title,
		IEnumerable<GetTaskGroupDTO>? Groups,
		int QuestionsCount,
		DateTime Start,
		DateTime End,
		string Status,
		int? Duration,
		bool OneChance,
		bool ShowAnswers,
		bool ShuffleQuestions
	);

	public record GetTaskGroupDTO(
		Guid Id,
		string Name
	);
}
