using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Topics.DeleteTopic
{
    public record DeleteTopicCommand(
        Guid Id
    ) : IRequest;
}
