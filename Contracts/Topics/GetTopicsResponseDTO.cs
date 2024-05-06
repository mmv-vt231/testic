using Contracts.Tests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Topics
{
    public record GetTopicsResponseDTO(
        Guid Id,
        string Title,
        IEnumerable<GetTopicsTestDTO>? Tests
    );
	public record GetTopicsTestDTO(
		Guid Id,
		string Title,
		int QuestionsCount,
		DateTime CreatedAt
	);
}
