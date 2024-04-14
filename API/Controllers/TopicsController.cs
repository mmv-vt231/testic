using Application.Tests.CreateTest;
using Application.Topics.CreateTopic;
using Application.Topics.DeleteTopic;
using Application.Topics.GetTopic;
using Application.Topics.GetTopicTests;
using Application.Topics.UpdateTopic;
using Contracts.Tests;
using Contracts.Topics;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/topics")]
    [ApiController]
    [Authorize]
    public class TopicsController : ControllerBase
    {
        private readonly ISender _mediator;
        public TopicsController(ISender mediator)
        {
            _mediator = mediator;
        }  

        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetTopic(Guid id)
        { 
            var group = await _mediator.Send(new GetTopicQuery(id));

            return Ok(group);
        }

        [HttpPut("{id:Guid}")]
        public async Task<IActionResult> UpdateTopic(Guid id, [FromBody] UpdateTopicRequestDTO dto)
        {
            var command = new UpdateTopicCommand(id, dto.Title);

            await _mediator.Send(command);

            return Ok();
        }

        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> DeleteTopic(Guid id)
        {
            await _mediator.Send(new DeleteTopicCommand(id));

            return Ok();
        }

        [HttpGet("{id:Guid}/tests")]
        public async Task<IActionResult> GetAllTopicTests(Guid id)
        {
            var tests = await _mediator.Send(new GetTopicTestsQuery(id));

            return Ok(tests);
        }

        [HttpPost("{id:Guid}/tests")]
        public async Task<IActionResult> CreateTest(Guid id, [FromBody] CreateTestRequestDTO dto)
        {
            var command = new CreateTestCommand(id, dto.Title);

            await _mediator.Send(command);

            return Created();
        }

    }
}
