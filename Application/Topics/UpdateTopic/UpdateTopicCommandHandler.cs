using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Topics.UpdateTopic
{
    public class UpdateTopicCommandHandler : IRequestHandler<UpdateTopicCommand>
    {
        private readonly ITopicRepository _topicRepository;

        public UpdateTopicCommandHandler(ITopicRepository topicRepository)
        {
            _topicRepository = topicRepository;
        }

        public async Task Handle(UpdateTopicCommand request, CancellationToken cancellationToken)
        {
            var topic = await _topicRepository.GetByIdAsync(request.Id);

            if (topic is null)
            {
                throw TopicsErrors.TopicNotFound;
            }

            topic.Title = request.Title;

            await _topicRepository.UpdateAsync(topic);
        }
    }
}
