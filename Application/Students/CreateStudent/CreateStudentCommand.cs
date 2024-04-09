using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Students.CreateStudent
{
    public record CreateStudentCommand(
        string FullName,
        string Email,
        Guid GroupId
    ) : IRequest;
}
