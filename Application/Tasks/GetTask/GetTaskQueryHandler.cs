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
				task.Duration,
				task.OneChance,
				task.ShowAnswers,
				task.Shuffle
			);

			return response;
		}
	}
}
