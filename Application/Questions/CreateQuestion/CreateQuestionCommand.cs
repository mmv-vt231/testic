using Contracts.Questions;
using MediatR;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Questions.CreateQuestion
{
	public record CreateQuestionCommand(
		Guid TestId,
		string Title,
		string? Image,
		float Points,
		string Type,
		dynamic Data,
		dynamic Keys
	) : IRequest;

	//public class CreateQuestionCommand : IRequest
	//{
	//	public Guid TestId { get; set; }
	//	public string Title { get; set; }
	//	public dynamic? Image { get; set; }
	//	public float Points { get; set; }
	//	public string Type { get; set; }
	//	public QuestionDataDTO Data { get; set; }
	//	public dynamic Keys { get; set; }
	//}
}
