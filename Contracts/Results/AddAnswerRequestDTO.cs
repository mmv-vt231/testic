using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Results
{
	public record AddAnswerRequestDTO(
		Guid QuestionId,
		dynamic Answer
	);
}
