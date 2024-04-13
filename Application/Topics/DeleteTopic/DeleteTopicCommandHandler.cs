using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Topics.DeleteTopic
{
    public class DeleteTopicCommandHandler : IRequestHandler<DeleteTopicCommand>
    {
        private readonly ITopicRepository _topicRepository;

        public DeleteTopicCommandHandler(ITopicRepository topicRepository)
        {
            _topicRepository = topicRepository;
        }

        public async Task Handle(DeleteTopicCommand request, CancellationToken cancellationToken)
        {
            var topic = await _topicRepository.GetByIdAsync(request.Id);

            if (topic is null)
            {
                throw TopicErrors.TopicNotFound;
            }

            await _topicRepository.DeleteAsync(topic);
        }
    }
}
