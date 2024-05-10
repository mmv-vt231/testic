using Application.Results.CreateResult;
using Application.Tasks.DeleteTask;
using Application.Tasks.GetTask;
using Application.Tasks.UpdateTask;
using Contracts.Results;
using Contracts.Tasks;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
	[Route("api/tasks")]
	[ApiController]
	[Authorize]
	public class TasksController : ControllerBase
	{
		private readonly ISender _mediator;
		public TasksController(ISender mediator)
		{
			_mediator = mediator;
		}

		[HttpGet("{id:Guid}")]
		public async Task<IActionResult> GetTask(Guid id)
		{
			var task = await _mediator.Send(new GetTaskQuery(id));

			return Ok(task);
		}

		[HttpPut("{id:Guid}")]
		public async Task<IActionResult> UpdateTask(Guid id, UpdateTaskRequestDTO dto)
		{
			var command = new UpdateTaskCommand(
				id, 
				dto.Groups,
				dto.Start,
				dto.End,
				dto.Duration,
				dto.OneChance,
				dto.ShowAnswers,
				dto.ShuffleQuestions
			);

			await _mediator.Send(command);

			return Ok();
		}

		[HttpDelete("{id:Guid}")]
		public async Task<IActionResult> DeleteTask(Guid id)
		{
			await _mediator.Send(new DeleteTaskCommand(id));

			return Ok();
		}

		[HttpPost("{id:Guid}/start")]
		public async Task<IActionResult> StartTask(Guid id, CreateResultRequestDTO dto)
		{
			var resultId = await _mediator.Send(new CreateResultCommand(id, dto.Email));

			return Ok(resultId);
		}
	}
}
