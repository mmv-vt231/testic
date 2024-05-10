using Application.Extensions;
using Contracts.Results;
using Domain.Entities;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace Application.Results.GetQuestion
{
	public class GetQuestionQueryHandler : IRequestHandler<GetQuestionQuery, GetQuestionResponseDTO>
	{
		private readonly IResultRepository _resultRepository;
		private readonly IQuestionRepository _questionRepository;
		public GetQuestionQueryHandler(
			IResultRepository resultRepository, 
			IQuestionRepository questionRepository)
		{
			_resultRepository = resultRepository;
			_questionRepository = questionRepository;
		}

		public async Task<GetQuestionResponseDTO> Handle(GetQuestionQuery request, CancellationToken cancellationToken)
		{
			var result = await _resultRepository.GetByIdAsync(request.ResultId);

			if (result is null)
			{
				throw ResultsErrors.ResultNotFound;
			}

			Guid questionId = Guid.Empty;

			var QuestionsOrder = JsonSerializer
				.Deserialize<List<ResultQuestionsOrder>>(result.QuestionsOrder);

			foreach (var question in QuestionsOrder)
			{
				if (!question.completed)
				{
					questionId = question.questionId;
					break;
				}
			}

			var questionData = await _questionRepository.GetByIdAsync(questionId);

			if (questionData is null)
			{
				throw QuestionsErrors.QuestionNotFound;
			}

			var data = JsonSerializer.Deserialize<JsonObject>(questionData.Data).AsObject();
			JsonObject newData = [];

			var answersArray = data["answers"].AsArray().Shuffle();
			newData.Add("answers", answersArray);

			if (questionData.Type == "relation")
			{
				var questionsArray = data["questions"].AsArray().Shuffle();
				newData.Add("questions", questionsArray);
			}

			return new GetQuestionResponseDTO(
				questionData.Id,
				questionData.Title,
				questionData.Image,
				questionData.Type,
				newData
			);
		}
	}
}
