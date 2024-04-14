using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Students
{
    public record CreateStudentRequestDTO(
        string FullName,
        string Email
    );
}
