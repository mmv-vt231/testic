using Contracts.Tasks;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tasks.GetTask
{
	public class GetTaskQueryHandler : IRequestHandler<GetTaskQuery, GetTaskResponseDTO>
	{
		private readonly ITaskRepository _taskRepository;
		public GetTaskQueryHandler(ITaskRepository taskRepository)
		{
			_taskRepository = taskRepository;
		}

		public async Task<GetTaskResponseDTO> Handle(GetTaskQuery request, CancellationToken cancellationToken)
		{
			var task = await _taskRepository.GetTaskDetails(request.Id);

			if(task is null)
			{
				throw TasksErrors.TaskNotFound;
			}

			var groups = task.Groups
				.Select(g => new GetTaskGroupDTO(
					g.Id,
					g.Name
				))
				.ToList();

			ICollection<GetTaskResultDTO> results = [];
			var resultsCount = task.Results.Count();

			foreach (var result in task.Results.OrderByDescending(r => r.End))
			{
				TimeSpan diff = result.End is not null
					? (DateTime)result.End - result.Start
					: new TimeSpan(0, 0, 0);

				var duration = diff.ToString("hh\\:mm\\:ss");
				float score = (float)Math.Round(result.Score, 2);
				float totalScore = (float)Math.Round(task.Test.TotalScore, 2);

				results.Add(new GetTaskResultDTO(
					result.Id,
					result.Student.FullName,
					result.Correct,
					result.Half,
					result.Wrong,
					score,
					totalScore,
					duration,
					result.End,
					result.Completed
				));
			}

			var status = "";
			var start = DateTime.Compare(task.Start, DateTime.Now);
			var end = DateTime.Compare(task.End, DateTime.Now);

			if (start > 0)
				status = "planned";
			else if (start <= 0 && end >= 0)
				status = "active";
			else
				status = "finished";

			var studentsCount = 0;

			foreach (var group in task.Groups)
			{
				studentsCount += group.Students.Count();
			}

			var completedCount = task.Results
				.Where(r => r.Completed)
				.Select(r => r.StudentId)
				.Distinct()
				.Count();
			var uncompletedCount = studentsCount - completedCount;
			float averageScore = (float)Math.Round(task.Results.Average(r => r?.Score) ?? 0, 2);

			var response = new GetTaskResponseDTO(
				task.Test.Title,
				groups,
				results,
				resultsCount,
				task.Test.Questions?.Count() ?? 0,
				task.Start,
				task.End,
				status,
				task.Duration,
				task.OneChance,
				task.ShowAnswers,
				task.ShuffleQuestions,
				studentsCount,
				completedCount,
				uncompletedCount,
				averageScore
			);

			return response;
		}
	}
}
