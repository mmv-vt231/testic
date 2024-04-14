using Contracts.Groups;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Groups.GetGroup
{
    public record GetGroupQuery(
        Guid Id
    ) : IRequest<GetGroupResponseDTO>;
}
