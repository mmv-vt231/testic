using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Groups.CreateGroup
{
    public record CreateGroupCommand(
        string Name,
        Guid UserId
    ) : IRequest;
}
