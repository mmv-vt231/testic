using Contracts.Students;
using Contracts.Groups;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Groups.GetGroup
{
    public class GetGroupQueryHandler : IRequestHandler<GetGroupQuery, GetGroupResponseDTO>
    {
        private readonly IGroupRepository _groupRepository;

        public GetGroupQueryHandler(IGroupRepository groupRepository)
        {
            _groupRepository = groupRepository;
        }

        public async Task<GetGroupResponseDTO> Handle(GetGroupQuery request, CancellationToken cancellationToken)
        {
            var group = await _groupRepository.GetByIdAsync(request.Id);

            if (group is null) 
            { 
                throw GroupsErrors.GroupNotFound;
            }

            var students = group.Students?
                .Select(s => new StudentDTO(
                    s.Id,
                    s.FullName,
                    s.Email,
                    s.GroupId
                ))
                .OrderBy(s => s.FullName)
                .ToList();

            var response = new GetGroupResponseDTO(
                group.Id,
                group.Name,
                students,
                group.UserId
            );

            return response;
        }
    }
}
