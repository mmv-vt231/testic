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

			var status = "";
			var start = DateTime.Compare(task.Start, DateTime.Now);
			var end = DateTime.Compare(task.End, DateTime.Now);

			if (start > 0)
				status = "planned";
			else if (start <= 0 && end >= 0)
				status = "active";
			else
				status = "finished";

			var response = new GetTaskResponseDTO(
				task.Test.Title,
				task.Groups?
					.Select(g => new GetTaskGroupDTO(
						g.Id,
						g.Name
					))
					.ToList(),
				task.Test.Questions?.Count() ?? 0,
				task.Start,
				task.End,
				status,
				task.Duration,
				task.OneChance,
				task.ShowAnswers,
				task.ShuffleQuestions
			);

			return response;
		}
	}
}
