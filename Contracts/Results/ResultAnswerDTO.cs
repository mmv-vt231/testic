using Contracts.Questions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Results
{
	public record ResultAnswerDTO(
		Guid QuestionId,
		dynamic Answer,
		float Points
	);
}
