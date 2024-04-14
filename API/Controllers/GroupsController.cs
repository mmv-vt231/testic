using Application.Groups.CreateGroup;
using Application.Groups.DeleteGroup;
using Application.Groups.GetGroup;
using Application.Groups.UpdateGroup;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Contracts.Groups;
using Contracts.Students;
using Application.Students.CreateStudent;

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

        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetGroup(Guid id)
        {
            var group = await _mediator.Send(new GetGroupQuery(id));

            return Ok(group);
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

        [HttpPost("{id:Guid}/students")]
        public async Task<IActionResult> CreateStudent(Guid id, [FromBody] CreateStudentRequestDTO dto)
        {
            var command = new CreateStudentCommand(id, dto.FullName, dto.Email);

            await _mediator.Send(command);

            return Created();
        }
    }
}
