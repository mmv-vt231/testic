using Contracts.Groups;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Groups.GetGroups
{
    public record GetGroupsQuery() : IRequest<IEnumerable<GetGroupsResponseDTO>>;
}
