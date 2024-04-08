using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Groups.UpdateGroup
{
    public record UpdateGroupCommand(
        Guid Id,
        string Name
    ) : IRequest;
}
