using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Topics.CreateTopic
{
    public record CreateTopicCommand(
        string Title
    ) : IRequest;
}
