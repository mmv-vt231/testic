using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Topics
{
    public record GetTopicResponseDTO(
        Guid Id,
        string Title
    );
}
