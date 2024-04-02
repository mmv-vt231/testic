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

namespace Application.Authentication.Register
{
    public class RegisterCommandHandler : IRequestHandler<RegisterCommand>
    {
        private readonly IUserRepository _userRepository;

        public RegisterCommandHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task Handle(RegisterCommand request, CancellationToken cancellationToken)
        {
            var exist = await _userRepository.GetByEmailAsync(request.Email);

            if (exist != null)
            {
                throw AuthenticationErrors.EmailExists;
            }

            var user = new User
            {
                Name = request.Name,
                Surname = request.Surname,
                Email = request.Email,
                Password = request.Password,
            };

            await _userRepository.CreateAsync(user);
        }
    }
}
