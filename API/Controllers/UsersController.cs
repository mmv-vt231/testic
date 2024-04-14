using Application.Groups.GetGroups;
using Application.Topics.GetTopics;
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
        public UsersController(ISender mediator) {
            _mediator = mediator;
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

        [HttpGet("topics")]
        public async Task<IActionResult> GetAllUserTopics()
        {
            var groups = await _mediator.Send(new GetTopicsQuery());

            return Ok(groups);
        }

        [HttpGet("groups")]
        public async Task<IActionResult> GetAllUserGroups()
        {
            var groups = await _mediator.Send(new GetGroupsQuery());

            return Ok(groups);
        }
    }
}
