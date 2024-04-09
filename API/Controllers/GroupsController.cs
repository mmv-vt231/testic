using Application.Groups.CreateGroup;
using Application.Groups.DeleteGroup;
using Application.Groups.GetGroups;
using Application.Groups.GetGroup;
using Application.Groups.UpdateGroup;
using Contracts.DTOs;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/groups")]
    [ApiController]
    [Authorize]
    public class GroupsController : ControllerBase
    {
        private readonly ISender _mediator;

        public GroupsController(ISender mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var groups = await _mediator.Send(new GetGroupsQuery());

            return Ok(groups);
        }

        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetGroup(Guid id)
        {
            var group = await _mediator.Send(new GetGroupQuery(id));

            return Ok(group);
        }

        [HttpPost]
        public async Task<IActionResult> CreateGroup(CreateGroupCommand command)
        {
            await _mediator.Send(command);

            return Created();
        }

        [HttpPut("{id:Guid}")]
        public async Task<IActionResult> UpdateGroup(Guid id, [FromBody] UpdateGroupRequestDTO dto)
        {
            var command = new UpdateGroupCommand(id, dto.Name);

            await _mediator.Send(command);

            return Ok();
        }

        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> DeleteGroup(Guid id)
        {
            var command = new DeleteGroupCommand(id);

            await _mediator.Send(command);

            return Ok();
        }
    }
}
