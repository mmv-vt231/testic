using Application.Interfaces;
using Contracts.Tests;
using Contracts.Topics;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Topics.GetTopics
{
    public class GetTopicsQueryHandler : IRequestHandler<GetTopicsQuery, IEnumerable<GetTopicsResponseDTO>>
    {
        private readonly IUserRepository _userRepository;
        private readonly IUserService _userService;

        public GetTopicsQueryHandler(IUserRepository userRepository, IUserService userService)
        {
            _userRepository = userRepository;
            _userService = userService;
        }

        public async Task<IEnumerable<GetTopicsResponseDTO>> Handle(GetTopicsQuery request, CancellationToken cancellationToken)
        {
            var topics = await _userRepository.GetAllUserTopics(_userService.Id);

            var response = topics?.Select(t => new GetTopicsResponseDTO(
                t.Id,
                t.Title,
                t.Tests?.Select(test => new TestDTO(
                    test.Id,
                    test.Title,
                    test.CreatedAt
                ))
                .OrderByDescending(t => t.CreatedAt)
                .ToList()
            )).ToList();

             return response;
        }
    }
}
