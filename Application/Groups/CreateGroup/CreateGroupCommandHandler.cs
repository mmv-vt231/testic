using Domain.Entities;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Groups.CreateGroup
{
    public class CreateGroupCommandHandler : IRequestHandler<CreateGroupCommand>
    {
        private readonly IGroupRepository _groupRepository;
        private readonly IUserRepository _userRepository;

        public CreateGroupCommandHandler(IGroupRepository groupRepository, IUserRepository userRepository) {
            _groupRepository = groupRepository;
            _userRepository = userRepository;
        }

        public async Task Handle(CreateGroupCommand request, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetByIdAsync(request.UserId);

            if(user is null) {
                throw UsersErrors.UserNotFound;
            }

            var group = new Group
            {
                Name = request.Name,
                UserId = request.UserId
            };

            await _groupRepository.CreateAsync(group);
        }
    }
}
