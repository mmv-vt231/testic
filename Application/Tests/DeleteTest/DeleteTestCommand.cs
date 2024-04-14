using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tests.DeleteTest
{
    public record DeleteTestCommand(
        Guid Id
    ) : IRequest;
}
