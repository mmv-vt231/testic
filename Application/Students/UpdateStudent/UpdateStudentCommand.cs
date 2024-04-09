using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Students.UpdateStudent
{
    public record UpdateStudentCommand(
        Guid Id,
        string FullName,
        string Email
    ) : IRequest;
}
