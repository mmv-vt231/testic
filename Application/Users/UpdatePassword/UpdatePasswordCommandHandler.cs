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

namespace Application.Users.UpdatePassword
{
    public class UpdatePasswordCommandHandler : IRequestHandler<UpdatePasswordCommand>
    {
        private readonly IUserRepository _userRepository;
        private readonly IUserService _userService;
        private readonly IPasswordHasher _passwordHasher;

        public UpdatePasswordCommandHandler(
            IUserRepository userRepository, 
            IUserService userService, 
            IPasswordHasher passwordHasher)
        {
            _userRepository = userRepository;
            _userService = userService;
            _passwordHasher = passwordHasher;
        }

        public async Task Handle(UpdatePasswordCommand request, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetByIdAsync(_userService.Id);

            if (!_passwordHasher.VerifyHash(request.Password, user.Password))
            {
                throw UsersErrors.IncorrectPassword;
            }

            var newHashPassword = _passwordHasher.HashPassword(request.NewPassword);

            user.Password = newHashPassword;

            await _userRepository.UpdateAsync(user);
        }
    }
}
