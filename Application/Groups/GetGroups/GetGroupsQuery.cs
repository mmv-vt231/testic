using Contracts.DTOs;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Groups.GetAllGroups
{
    public record GetGroupsQuery() : IRequest<IEnumerable<GetGroupsResponseDTO>>;
}
