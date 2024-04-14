using Application.Students.DeleteStudent;
using Application.Students.GetStudent;
using Application.Students.UpdateStudent;
using Contracts.Students;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/students")]
    [ApiController]
    [Authorize]
    public class StudentsController : ControllerBase
    {
        private readonly ISender _mediator;
        public StudentsController(ISender mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetStudent(Guid id)
        {
            var student = await _mediator.Send(new GetStudentQuery(id));

            return Ok(student);
        }

        [HttpPut("{id:Guid}")]
        public async Task<IActionResult> UpdateStudent(Guid id, UpdateStudentRequestDTO dto)
        {
            var command = new UpdateStudentCommand (id, dto.FullName, dto.Email);

            await _mediator.Send(command);

            return Ok();
        }

        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> DeleteStudent(Guid id)
        {
            var command = new DeleteStudentCommand(id);

            await _mediator.Send(command);  

            return Ok();
        }
    }
}
