using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.DTOs
{
    public record GetStudentResponseDTO(
        Guid Id,
        string FullName,
        string Email,
        Guid GroupId
    );
}
