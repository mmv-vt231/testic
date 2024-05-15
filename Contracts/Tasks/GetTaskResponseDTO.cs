using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Tasks
{
	public record GetTaskResponseDTO(
		string Title,
		IEnumerable<GetTaskGroupDTO> Groups,
		IEnumerable<GetTaskResultDTO> Results,
		int resultsCount,
		int QuestionsCount,
		DateTime Start,
		DateTime End,
		string Status,
		int? Duration,
		bool OneChance,
		bool ShowAnswers,
		bool ShuffleQuestions,
		int studentsCount,
		int completedCount,
		int uncompletedCount,
		float averageScore
	);

	public record GetTaskGroupDTO(
		Guid Id,
		string Name
	);
	public record GetTaskResultDTO(
		Guid Id,
		string FullName,
		int Correct,
		int Half,
		int Wrong,
		float Score,
		float TotalScore,
		string Duration,
		DateTime? EndDate,
		bool Completed
	);
}
