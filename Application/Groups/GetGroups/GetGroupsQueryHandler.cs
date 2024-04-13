using Application.Groups.GetGroups;
using Application.Interfaces;
using Contracts.DTOs;
using Domain.Entities;
using Domain.Repositories;
using MediatR;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Groups.GetGroups
{
    public class GetGroupsQueryHandler : IRequestHandler<GetGroupsQuery, IEnumerable<GetGroupsResponseDTO>>
    {
        private readonly IGroupRepository _groupRepository;
        private readonly IUserService _userService;

        public GetGroupsQueryHandler(IGroupRepository groupRepository, IUserService userService) { 
            _groupRepository = groupRepository;
            _userService = userService;
        }

        public async Task<IEnumerable<GetGroupsResponseDTO>> Handle(GetGroupsQuery request, CancellationToken cancellationToken)
        {
            var groups = await _groupRepository.GetAllUserGroups(_userService.Id);

            var response = groups?.Select(g => new GetGroupsResponseDTO()
            {
                Id = g.Id,
                Name = g.Name,
                StudentsCount = g.Students?.Count ?? 0,
            }).ToList();


            return response;
        }
    }
}
