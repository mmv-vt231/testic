using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Results
{
	public record AddAnswerRequestDTO(
		[Required]
		Guid QuestionId,

		[Required]
		dynamic Answer
	);
}
