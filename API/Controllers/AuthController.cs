using Application.Authentication.Authorize;
using Application.Authentication.Login;
using Application.Authentication.Register;
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
        public async Task<IActionResult> Register(RegisterCommand command)
        {
            await _mediator.Send(command);

            return Created();
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginQuery query)
        {
            var token = await _mediator.Send(query);

            return Ok(token);
        }

        [HttpGet("authorize")]
        [Authorize]
        public async Task<IActionResult> Authorize()
        {
            string authorization = Request.Headers.Authorization;
            string token = authorization.Split(" ")[1];

            var response = await _mediator.Send(new AuthorizeQuery(token));

            return Ok(response);
        }
    }
}
