using Application.Results.AddAnswerResult;
using Application.Results.FinishTesting;
using Application.Results.GetQuestion;
using Application.Results.GetResult;
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
	}
}
