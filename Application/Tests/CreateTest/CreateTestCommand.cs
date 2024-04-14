using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tests.CreateTest
{
    public record CreateTestCommand(
        Guid TopicId,
        string Title
    ) : IRequest;
}
