using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Tasks
{
	public record GetTaskStartInfoResponseDTO(
		string Title,
		int QuestionsCount,
		int Duration,
		bool OneChance
	);
}
