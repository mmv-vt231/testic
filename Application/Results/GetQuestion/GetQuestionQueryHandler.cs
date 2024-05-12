using Application.Extensions;
using Contracts.Results;
using Domain.Entities;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace Application.Results.GetQuestion
{
	public class GetQuestionQueryHandler : IRequestHandler<GetQuestionQuery, GetQuestionResponseDTO?>
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

		public async Task<GetQuestionResponseDTO?> Handle(GetQuestionQuery request, CancellationToken cancellationToken)
		{
			var result = await _resultRepository.GetByIdAsync(request.ResultId);

			if (result is null || result.Completed)
			{
				throw ResultsErrors.ResultNotFound;
			}

			Guid? questionId = null;
			int questionOrder = 0;

			var questionsOrder = JsonSerializer
				.Deserialize<List<ResultQuestionsOrder>>(result.QuestionsOrder);
			var totalQuestions = questionsOrder.Count;

			for (int i = 0; i < questionsOrder.Count; i++)
			{
				if (!questionsOrder[i].completed)
				{
					questionId = questionsOrder[i].questionId;
					questionOrder = i + 1;
					break;
				}
			}

			if(questionId is null)
			{
				return null;
			}

			var questionData = await _questionRepository.GetByIdAsync((Guid)questionId);

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
				questionOrder,
				totalQuestions,
				newData
			);
		}
	}
}
