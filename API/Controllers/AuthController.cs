using Application.Authentication.Authorize;
using Application.Authentication.Login;
using Application.Authentication.Register;
using Contracts.Auth;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/auth")]
    [ApiController]
    
    public class AuthController : ControllerBase
    {
        private readonly ISender _mediator;

        public AuthController(ISender mediator) { 
            _mediator = mediator;
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register(RegisterRequestDTO dto)
        {
            var command = new RegisterCommand(
                dto.Name, 
                dto.Surname, 
                dto.Email, 
                dto.Password
            );

            await _mediator.Send(command);

            return Created();
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginRequestDTO dto)
        {
            var query = new LoginQuery(dto.Email, dto.Password);

            var token = await _mediator.Send(query);

            return Ok(token);
        }

        [HttpGet("authorize")]
        [Authorize]
        public async Task<IActionResult> Authorize()
        {
            var response = await _mediator.Send(new AuthorizeQuery());

            return Ok(response);
        }
    }
}
