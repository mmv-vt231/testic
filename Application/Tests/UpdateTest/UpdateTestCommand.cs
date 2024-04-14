using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tests.UpdateTest
{
    public record UpdateTestCommand(
        Guid Id,
        string Title
    ) : IRequest;
}
