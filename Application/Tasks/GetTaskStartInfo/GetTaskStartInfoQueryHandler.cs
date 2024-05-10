using Contracts.Tasks;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tasks.GetTaskStartInfo
{
	public class GetTaskStartInfoQueryHandler : IRequestHandler<GetTaskStartInfoQuery, GetTaskStartInfoResponseDTO>
	{
		public readonly ITaskRepository _taskRepository;

		public GetTaskStartInfoQueryHandler(ITaskRepository taskRepository)
		{
			_taskRepository = taskRepository;
		}

		public async Task<GetTaskStartInfoResponseDTO> Handle(GetTaskStartInfoQuery request, CancellationToken cancellationToken)
		{
			var task = await _taskRepository.GetTaskDetails(request.Id);

			if (task == null)
			{
				throw TasksErrors.TaskNotFound;
			}

			var test = task.Test;

			return new GetTaskStartInfoResponseDTO(
				test.Title,
				test.Questions?.Count() ?? 0,
				task.Duration,
				task.OneChance
			);
		}
	}
}
