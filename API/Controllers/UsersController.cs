using Application.Users.UpdateData;
using Application.Users.UpdatePassword;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/user")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {
        private readonly ISender _mediator;
        public UsersController(ISender medaitor) {
            _mediator = medaitor;
        }

        [HttpPut]
        public async Task<IActionResult> UpdateData(UpdateDataCommand command)
        {
            await _mediator.Send(command);

            return Ok();
        }

        [HttpPut("changePassword")]
        public async Task<IActionResult> UpdatePassword(UpdatePasswordCommand command)
        {
            await _mediator.Send(command);

            return Ok();
        }
    }
}
