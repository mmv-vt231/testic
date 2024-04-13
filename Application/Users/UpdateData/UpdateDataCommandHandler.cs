using Application.Interfaces;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Users.UpdateData
{
    public class UpdateDataCommandHandler : IRequestHandler<UpdateDataCommand>
    {
        private readonly IUserRepository _userRepository;
        private readonly IUserService _userService;

        public UpdateDataCommandHandler(IUserRepository userRepository, IUserService userService)
        {
            _userRepository = userRepository;
            _userService = userService;
        }

        public async Task Handle(UpdateDataCommand request, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetByIdAsync(_userService.Id);

            user.Name = request.Name;
            user.Surname = request.Surname;

            await _userRepository.UpdateAsync(user);
        }
    }
}
