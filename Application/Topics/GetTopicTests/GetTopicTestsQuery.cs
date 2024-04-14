using Contracts.DTOs;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Topics.GetTopicTests
{
    public record GetTopicTestsQuery(
        Guid Id
    ) : IRequest<IEnumerable<TestDTO>>;
}
