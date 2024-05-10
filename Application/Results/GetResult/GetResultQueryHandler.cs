using Contracts.Questions;
using Contracts.Results;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System.Text.Json;
using System.Text.Json.Nodes;

namespace Application.Results.GetResult
{
	public class GetResultQueryHandler : IRequestHandler<GetResultQuery, GetResultResponseDTO>
	{
		private readonly IResultRepository _resultRepository;

		public GetResultQueryHandler(
			IResultRepository resultRepository)
		{
			_resultRepository = resultRepository;
		}

		public async Task<GetResultResponseDTO> Handle(GetResultQuery request, CancellationToken cancellationToken)
		{
			var result = await _resultRepository.GetResultDetails(request.Id);

			if (result is null)
			{
				throw ResultsErrors.ResultNotFound;
			}

			var student = result.Student;
			var task = result.Task;
			var test = task.Test;
			var questions = test.Questions;
			var questionsOrder = JsonSerializer.Deserialize<JsonArray>(result.QuestionsOrder);

			TimeSpan diff = result.End is not null 
				? (DateTime)result.End - result.Start 
				: new TimeSpan(0, 0, 0);

			var duration = TimeOnly.FromTimeSpan(diff);
			var questionsCount = questions?.Count() ?? 0;
			var percentages = (int)Math.Round(result.Score / test.TotalScore * 100);

			JsonArray? answersData = null;
			List<QuestionDTO>? questionsData = null;

			if (task.ShowAnswers)
			{
				answersData = JsonSerializer.Deserialize<JsonArray>(result.Answers);
				questionsData = test.Questions?
					.OrderBy(q =>
					{
						int? index = questionsOrder?
							.SingleOrDefault(o => (Guid)o["questionId"] == q.Id)
							.GetElementIndex();
						if(index is null) return int.MaxValue;
						return index;
					})
					.Select(q => {
						JsonNode data = JsonSerializer.Deserialize<JsonNode>(q.Data);

						return new QuestionDTO(
							q.Id,
							q.Title,
							q.Image,
							q.Points,
							q.Type,
							data,
							null
						);
					}).ToList();

			}


			var details = new GetResultDetailsDTO(
				result.Correct,
				result.Half,
				result.Wrong,
				(float)Math.Round(result.Score, 2),
				test.TotalScore,
				duration,
				questionsCount,
				percentages
			);

			return new GetResultResponseDTO(
				test.Title,
				student.FullName,
				student.Group.Name,
				details,
				answersData,
				questionsData
			);
		}
	}
}
