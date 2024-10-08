﻿using Contracts.Topics;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Topics.GetTopic
{
    public class GetTopicQueryHandler : IRequestHandler<GetTopicQuery, GetTopicResponseDTO>
    {
        private readonly ITopicRepository _topicRepository;

        public GetTopicQueryHandler(ITopicRepository topicRepository)
        {
            _topicRepository = topicRepository;
        }

        public async Task<GetTopicResponseDTO> Handle(GetTopicQuery request, CancellationToken cancellationToken)
        {
            var topic = await _topicRepository.GetByIdAsync(request.Id);

            if (topic is null)
            {
                throw TopicsErrors.TopicNotFound;
            }

            return new GetTopicResponseDTO(
                topic.Id,
                topic.Title
            );
        }
    }
}
