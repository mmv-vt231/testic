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
        private readonly IUserRepository _userRepository;
        private readonly IUserService _userService;

        public GetGroupsQueryHandler(IUserRepository userRepository, IUserService userService) {
            _userRepository = userRepository;
            _userService = userService;
        }

        public async Task<IEnumerable<GetGroupsResponseDTO>> Handle(GetGroupsQuery request, CancellationToken cancellationToken)
        {
            var groups = await _userRepository.GetAllUserGroups(_userService.Id);

            var response = groups?.Select(g => new GetGroupsResponseDTO(
                g.Id,
                g.Name,
                g.Students?.Count() ?? 0
            )).ToList();

            return response;
        }
    }
}
