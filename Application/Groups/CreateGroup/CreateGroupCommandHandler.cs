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

namespace Application.Groups.CreateGroup
{
    public class CreateGroupCommandHandler : IRequestHandler<CreateGroupCommand>
    {
        private readonly IGroupRepository _groupRepository;
        private readonly IUserRepository _userRepository;
        private readonly IUserService _userService;

        public CreateGroupCommandHandler(
            IGroupRepository groupRepository, 
            IUserRepository userRepository, 
            IUserService userService
        ) {
            _groupRepository = groupRepository;
            _userRepository = userRepository;
            _userService = userService;
        }

        public async Task Handle(CreateGroupCommand request, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetByIdAsync(_userService.Id);

            if(user is null) {
                throw UsersErrors.UserNotFound;
            }

            var group = new Group
            {
                Name = request.Name,
                UserId = _userService.Id
            };

            await _groupRepository.CreateAsync(group);
        }
    }
}
