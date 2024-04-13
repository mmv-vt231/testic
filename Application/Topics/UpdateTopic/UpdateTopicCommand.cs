using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Topics.UpdateTopic
{
    public record UpdateTopicCommand(
        Guid Id,
        string Title
    ) : IRequest;
}
