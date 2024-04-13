using Application.Interfaces;
using Contracts.DTOs;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Authentication.Login
{
    public class LoginQueryHandler : IRequestHandler<LoginQuery, LoginResponseDTO>
    {
        private readonly IUserRepository _userRepository;
        private readonly IJwtTokenUtils _jwtTokenUtils;
        private readonly IPasswordHasher _passwordHasher;

        public LoginQueryHandler(
            IUserRepository userRepository, 
            IJwtTokenUtils jwtTokenUtils, 
            IPasswordHasher passwordHasher)
        {
            _userRepository = userRepository;
            _jwtTokenUtils = jwtTokenUtils;
            _passwordHasher = passwordHasher;
        }

        public async Task<LoginResponseDTO> Handle(LoginQuery request, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetByEmailAsync(request.Email);

            if (user is null)
            {
                throw AuthenticationErrors.InvalidCredentials;
            }

            if (!_passwordHasher.VerifyHash(request.Password, user.Password))
            {
                throw AuthenticationErrors.InvalidCredentials;
            }

            var token = _jwtTokenUtils.GenerateToken(user);

            return new LoginResponseDTO(
                token,
                new UserDTO(
                    user.Id,
                    user.Name,
                    user.Surname,
                    user.Email,
                    user.CreatedAt
                )
            );
        }
    }
}
