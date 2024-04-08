using Domain.Entities;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Groups.GetGroup
{
    public class GetGroupQueryHandler : IRequestHandler<GetGroupQuery, Group?>
    {
        private readonly IGroupRepository _groupRepository;

        public GetGroupQueryHandler(IGroupRepository groupRepository)
        {
            _groupRepository = groupRepository;
        }

        public Task<Group?> Handle(GetGroupQuery request, CancellationToken cancellationToken)
        {
            var group = _groupRepository.GetByIdAsync(request.Id);

            return group;
        }
    }
}
