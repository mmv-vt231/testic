using Application.Interfaces;
using Domain.Entities;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Topics.CreateTopic
{
    public class CreateTopicCommandHandler : IRequestHandler<CreateTopicCommand>
    {
        private readonly ITopicRepository _topicRepository;
        private readonly IUserRepository _userRepository;
        private readonly IUserService _userService;

        public CreateTopicCommandHandler(
            ITopicRepository topicRepository, 
            IUserRepository userRepository, 
            IUserService userService)
        {
            _topicRepository = topicRepository;
            _userRepository = userRepository;
            _userService = userService;
        }

        public async Task Handle(CreateTopicCommand request, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetByIdAsync(_userService.Id);

            if (user is null) {
                throw UsersErrors.UserNotFound;
            }

            var topic = new Topic
            {
                Title = request.Title,
                UserId = _userService.Id
            };

            await _topicRepository.CreateAsync(topic);
        }
    }
}
