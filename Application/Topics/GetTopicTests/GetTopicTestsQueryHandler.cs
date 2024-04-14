using Application.Topics.GetTopicTests;
using Contracts.Tests;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Topics.GetTopicTests
{
    public class GetTopicTestsQueryHandler : IRequestHandler<GetTopicTestsQuery, IEnumerable<TestDTO>>
    {
        private readonly ITopicRepository _topicRepository;

        public GetTopicTestsQueryHandler(
            ITopicRepository topicRepository)
        {
            _topicRepository = topicRepository;
        }

        public async Task<IEnumerable<TestDTO>> Handle(GetTopicTestsQuery request, CancellationToken cancellationToken)
        {
            var tests = await _topicRepository.GetAllTopicTests(request.Id);

            var response = tests?.Select(t => new TestDTO(
                t.Id,
                t.Title,
                t.CreatedAt
            )).ToList();

            return response;
        }
    }
}
