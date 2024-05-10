using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Results
{
	public record GetQuestionResponseDTO(
		Guid Id,
		string Title,
		string? Image,
		string Type,
		dynamic Data
	);
}
