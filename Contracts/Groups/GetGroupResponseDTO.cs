using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Contracts.Students;

namespace Contracts.Groups
{
    public record GetGroupResponseDTO(
        Guid Id,
        string Name,
        IEnumerable<StudentDTO> Students,
        Guid UserId
    );
}
