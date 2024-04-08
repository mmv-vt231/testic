using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.DTOs
{
    public record UserDTO(
        Guid Id,
        string Name,
        string Surname,
        string Email
    );
}
