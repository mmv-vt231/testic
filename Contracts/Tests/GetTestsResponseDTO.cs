using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Tests
{
	public record GetTestsResponseDTO(
		Guid Id,
		string Title,
		int QuestionsCount,
		DateTime CreatedAt
	);
}
