using Application.Authentication.Login;
using Application.Authentication.Register;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class AuthController : ControllerBase
    {
        private readonly ISender _mediator;

        public AuthController(ISender mediator) { 
            _mediator = mediator;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterCommand request)
        {
            await _mediator.Send(request);

            return Ok();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginQuery request)
        {
            var token = await _mediator.Send(request);

            return Ok(token);
        }
    }
}
