using Application.Results.AddAnswerResult;
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

namespace Application.Results.AddAnswer
{
	public class AddAnswerCommandHandler : IRequestHandler<AddAnswerCommand>
	{
		private readonly IResultRepository _resultRepository;
		private readonly IQuestionRepository _questionRepository;
		public AddAnswerCommandHandler(IResultRepository resultRepository, IQuestionRepository questionRepository)
		{
			_resultRepository = resultRepository;
			_questionRepository = questionRepository;
		}

		public async Task Handle(AddAnswerCommand request, CancellationToken cancellationToken)
		{
			var result = await _resultRepository.GetByIdAsync(request.ResultId);

			if (result is null)
			{
				throw ResultsErrors.ResultNotFound;
			} else if(result.Completed) {
				throw ResultsErrors.ResultEditDenied;
			}
 
			var question = await _questionRepository.GetByIdAsync(request.QuestionId);

			if (question is null)
			{
				throw QuestionsErrors.QuestionNotFound;
			}

			var questionsOrder = JsonSerializer
				.Deserialize<List<ResultQuestionsOrder>>(result.QuestionsOrder);

			foreach(var q in questionsOrder)
			{
				if (q.questionId == question.Id && q.completed)
				{
					throw ResultsErrors.QuestionEditDenied; 
				}
			}
				
			var keys = JsonSerializer.Deserialize<JsonArray>(question.Keys).AsArray();
			JsonArray answerData = JsonSerializer.Deserialize<JsonArray>(request.Answer).AsArray();

			float points = 0;

			if(question.Type == "single")
			{
				JsonObject answer = [];
				answer.Add("answerId", answerData[0].DeepClone());

				if ((Guid)keys[0] == (Guid)answerData[0])
				{
					points += question.Points;
					result.Correct++;
					answer.Add("correct", true);
				} else {
					result.Wrong++;
					answer.Add("correct", false);
				}

				answerData[0] = answer;
			} else {
				switch (question.Type) {
					case "multiple": {
						float answerCost = question.Points / keys.Count;
						var correct = 0;

						for (int i = 0; i < keys.Count; i++) {
							var answer = answerData.FirstOrDefault(a => (Guid)a == (Guid)keys[i]);

							if (answer is not null)
							{
								points += answerCost;
								correct++;
							}
						}

						for (int i = 0; i < answerData.Count; i++)
						{
							JsonObject answer = [];
							var key = keys.FirstOrDefault(k => (Guid)k == (Guid)answerData[i]);

							answer.Add("answerId", answerData[i].DeepClone());
							answer.Add("correct", key is not null);
							answerData[i] = answer;
						}

						if (correct == keys.Count)
							result.Correct++;
						else if(correct > 0)
							result.Half++;
						else 
							result.Wrong++;
						break;
					}

					case "relation": {
						float answerCost = question.Points / keys.Count;
						var correct = 0;

						for (int i = 0; i < answerData.Count; i++)
						{
							answerData[i]["correct"] = false;

							foreach (var key in keys)
							{
								if ((Guid)key["question"] == (Guid)answerData[i]["question"]
									&& (Guid)key["answer"] == (Guid)answerData[i]["answer"])
								{
									points += answerCost;
									correct++;
									answerData[i]["correct"] = true;
									break;
								}
							}
						}

						if (correct == keys.Count)
							result.Correct++;
						else if (correct > 0)
							result.Half++;
						else
							result.Wrong++;
						break;
					}

					case "order": {
						float answerCost = question.Points / keys.Count;
						var correct = 0;

						for (int i = 0; i < keys.Count; i++)
						{
							JsonObject answer = [];
							answer.Add("answerId", answerData[i].DeepClone());
	
							if ((Guid)keys[i] == (Guid)answerData[i])
							{
								points += answerCost;
								correct++;
								answer.Add("correct", true);
							} else {
								answer.Add("correct", false);
							}

							answerData[i] = answer;
						}

						if (correct == keys.Count)
							result.Correct++;
						else if (correct > 0)
							result.Half++;
						else
							result.Wrong++;
						break;
					}
				}
			}

			result.Score += points;

			JsonObject userAnswer = [];

			userAnswer.Add("questionId", request.QuestionId);
			userAnswer.Add("answer", answerData);
			userAnswer.Add("points", Math.Round(points, 2));

			var answers = JsonSerializer.Deserialize<JsonArray>(result.Answers).AsArray();

			answers.Add(userAnswer);
			result.Answers = JsonSerializer.Serialize(answers);

			foreach(var q in questionsOrder)
			{
				if(q.questionId == question.Id)
				{
					q.completed = true;
				}
			}
			result.QuestionsOrder = JsonSerializer.Serialize(questionsOrder);

			await _resultRepository.UpdateAsync(result);
		}
	}
}
