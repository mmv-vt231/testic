using Application.Interfaces;
using Contracts.DTOs;
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
        private readonly ITopicRepository _topicRepository;
        private readonly IUserService _userService;

        public GetTopicsQueryHandler(ITopicRepository topicRepository, IUserService userService)
        {
            _topicRepository = topicRepository;
            _userService = userService;
        }

        public async Task<IEnumerable<GetTopicsResponseDTO>> Handle(GetTopicsQuery request, CancellationToken cancellationToken)
        {
            var topics = await _topicRepository.GetAllUserTopics(_userService.Id);

            var response = topics?.Select(t => new GetTopicsResponseDTO(
                t.Id,
                t.Title
            )).ToList();

             return response;
        }
    }
}
