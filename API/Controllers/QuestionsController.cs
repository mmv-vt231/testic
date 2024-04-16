using Application.Questions.DeleteQuestion;
using Application.Questions.UpdateQuestion;
using Contracts.Questions;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/questions")]
    [ApiController]
    [Authorize]
    public class QuestionsController : ControllerBase
    {
        private readonly ISender _mediator;
        public QuestionsController(ISender mediator)
        {
            _mediator = mediator;
        }

        [HttpPut("{id:Guid}")]
        public async Task<IActionResult> UpdateQuestion(Guid id, [FromBody] UpdateQuestionRequestDTO dto)
        {
            var command = new UpdateQuestionCommand(
                id,
                dto.Title,
                dto.Image,
                dto.Points,
                dto.Type,
                dto.Data,
                dto.Keys
            );

            await _mediator.Send(command);

            return Ok();
        }

        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> DeleteQuestion(Guid id)
        {
            await _mediator.Send(new DeleteQuestionCommand(id));

            return Ok();
        }
    }
}
