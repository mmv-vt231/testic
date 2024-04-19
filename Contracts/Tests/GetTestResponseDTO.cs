using Contracts.Questions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Tests
{
    public record GetTestResponseDTO(
        Guid Id,
        string Title,
        IEnumerable<QuestionDTO> Questions
    );
}
