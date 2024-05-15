using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Tasks
{
	public record UpdateTaskRequestDTO(
		[Required]
		ICollection<Guid> Groups,

		[Required]
		DateTime Start,

		[Required]
		DateTime End,

		[Required, Range(1, 300)]
		int Duration,

		[Required]
		bool OneChance,

		[Required]
		bool ShowAnswers,

		[Required]
		bool ShuffleQuestions
	);
}
