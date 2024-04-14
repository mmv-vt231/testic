using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Contracts.Users;

namespace Contracts.Auth
{
    public record LoginResponseDTO(
        string Token,
        UserDTO User
    );
}
