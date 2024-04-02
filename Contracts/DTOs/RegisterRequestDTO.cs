using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.DTOs
{
    public record RegisterRequestDTO(
        string Name, 
        string Surname, 
        string Email, 
        string Password
    );
}
