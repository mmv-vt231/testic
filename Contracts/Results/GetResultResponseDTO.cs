using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Results
{
	public record GetResultResponseDTO(
		string Title,
		string FullName,
		string Group,
		GetResultDetailsDTO Details,
		dynamic? Answers,
		dynamic? Questions
	);

	public record GetResultDetailsDTO(
		int Correct,
		int Half,
		int Wrong,
		float Score,
		float TotalScore,
		TimeOnly Duration,
		int QuestionsCount,
		int Percentages
	);
}
