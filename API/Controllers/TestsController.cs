using Application.Interfaces;
using Application.Questions.CreateQuestion;
using Application.Tests.DeleteTest;
using Application.Tests.GetTest;
using Application.Tests.UpdateTest;
using Contracts.Questions;
using Contracts.Tests;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/tests")]
    [ApiController]
    [Authorize]
    public class TestsController : ControllerBase
    {
        private readonly ISender _mediator;

        public TestsController(ISender mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetTest(Guid id)
        {
            var test = await _mediator.Send(new GetTestQuery(id));

            return Ok(test);
        }

        [HttpPut("{id:Guid}")]
        public async Task<IActionResult> UpdateTest(Guid id, [FromBody] UpdateTestRequestDTO dto)
        {
            var command = new UpdateTestCommand(id, dto.Title);

            await _mediator.Send(command);

            return Ok();
        }

        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> DeleteTest(Guid id)
        {
            await _mediator.Send(new DeleteTestCommand(id));

            return Ok();
        }

        [HttpPost("{id:Guid}/questions")]
        public async Task<IActionResult> CreateQuestion(Guid id, [FromBody] CreateQuestionRequestDTO dto)
        {
            var command = new CreateQuestionCommand(
                id, 
                dto.Title,
                dto.Image,
                dto.Points,
                dto.Type,
                dto.Data,
                dto.Keys
            );

            await _mediator.Send(command);

            return Created();
        }
    }
}
