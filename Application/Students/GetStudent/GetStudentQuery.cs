using Contracts.Students;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Students.GetStudent
{
    public record GetStudentQuery(
        Guid Id
    ) : IRequest<GetStudentResponseDTO>;
}
