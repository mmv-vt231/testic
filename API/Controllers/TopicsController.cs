using Application.Topics.CreateTopic;
using Application.Topics.DeleteTopic;
using Application.Topics.GetTopic;
using Application.Topics.GetTopics;
using Application.Topics.UpdateTopic;
using Contracts.DTOs;
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

        [HttpGet]
        public async Task<IActionResult> GetAll() {
            var groups = await _mediator.Send(new GetTopicsQuery());

            return Ok(groups);
        }

        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetTopic(Guid id)
        { 
            var group = await _mediator.Send(new GetTopicQuery(id));

            return Ok(group);
        }

        [HttpPost]
        public async Task<IActionResult> CreateTopic(CreateTopicCommand command)
        {
            await _mediator.Send(command);

            return Created();
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
    }
}
