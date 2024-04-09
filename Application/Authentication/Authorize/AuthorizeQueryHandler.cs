using Application.Interfaces;
using Contracts.DTOs;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Authentication.Authorize
{
    public class AuthorizeQueryHandler : IRequestHandler<AuthorizeQuery, UserDTO>
    {
        private readonly IUserRepository _userRepository;
        private readonly IUserService _userService;
        public AuthorizeQueryHandler(IUserRepository userRepository, IUserService userService) { 
            _userRepository = userRepository;
            _userService = userService;
        }
        public async Task<UserDTO> Handle(AuthorizeQuery request, CancellationToken cancellationToken)
        {
            var user = await _userRepository.GetByIdAsync(_userService.Id);

            if (user is null)
            {
                throw UsersErrors.UserNotFound;
            }

            return new UserDTO(
                user.Id,
                user.Name,
                user.Surname,
                user.Email
            ); ;
        }
    }
}
