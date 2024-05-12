using Application.Results.AddAnswerResult;
using Application.Results.DeleteResult;
using Application.Results.FinishTesting;
using Application.Results.GetQuestion;
using Application.Results.GetResult;
using Application.Results.GetTime;
using Contracts.Results;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
	[Route("api/testing")]
	[ApiController]
	[AllowAnonymous]
	public class TestingController : Controller
	{
		private readonly ISender _mediator;
		public TestingController(ISender mediator)
		{
			_mediator = mediator;
		}

		[HttpGet("{id:Guid}/question")]
		public async Task<IActionResult> GetQuestion(Guid id)
		{
			var question = await _mediator.Send(new GetQuestionQuery(id));

			if (question is null)
			{
				await _mediator.Send(new FinishTestingCommand(id));
			}

			return Ok(question);
		}

		[HttpPost("{id:Guid}/answer")]
		public async Task<IActionResult> AddAnswer(Guid id, AddAnswerRequestDTO dto)
		{
			await _mediator.Send(new AddAnswerCommand(id, dto.QuestionId, dto.Answer));

			return Ok();
		}

		[HttpPost("{id:Guid}/finish")]
		public async Task<IActionResult> FinishTesting(Guid id)
		{
			await _mediator.Send(new FinishTestingCommand(id));

			return Ok();
		}

		[HttpGet("{id:Guid}/result")]
		public async Task<IActionResult> GetResult(Guid id)
		{
			var result = await _mediator.Send(new GetResultQuery(id));

			return Ok(result);
		}

		[HttpGet("{id:Guid}/time")]
		public async Task<IActionResult> GetTime(Guid id)
		{
			var time = await _mediator.Send(new GetTimeQuery(id));

			return Ok(time);
		}

		[HttpDelete("{id:Guid}")]
		[Authorize]
		public async Task<IActionResult> DeleteResult(Guid id)
		{
			await _mediator.Send(new DeleteResultCommand(id));

			return Ok();
		}
	}
}
