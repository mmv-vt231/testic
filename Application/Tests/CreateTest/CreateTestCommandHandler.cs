using Domain.Entities;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tests.CreateTest
{
    public class CreateTestCommandHandler : IRequestHandler<CreateTestCommand>
    {
        private readonly ITestRepository _testRepository;
        private readonly ITopicRepository _topicRepository;

        public CreateTestCommandHandler(
            ITestRepository testRepository,
            ITopicRepository topicRepository)
        {
            _testRepository = testRepository;
            _topicRepository = topicRepository;
        }

        public async Task Handle(CreateTestCommand request, CancellationToken cancellationToken)
        {
            var topic = await _topicRepository.GetByIdAsync(request.TopicId);

            if (topic is null)
            {
                throw TopicsErrors.TopicNotFound;
            }

            var test = new Test
            {
                Title = request.Title,
                TopicId = request.TopicId
            };

            await _testRepository.CreateAsync(test);
        }
    }
}
