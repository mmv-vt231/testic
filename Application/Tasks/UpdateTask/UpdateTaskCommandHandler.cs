using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tasks.UpdateTask
{
	public class UpdateTaskCommandHandler : IRequestHandler<UpdateTaskCommand>
	{
		private readonly ITaskRepository _taskRepository;

		public UpdateTaskCommandHandler(
			ITaskRepository taskRepository)
		{
			_taskRepository = taskRepository;
		}

		public async Task Handle(UpdateTaskCommand request, CancellationToken cancellationToken)
		{
			var task = await _taskRepository.GetByIdAsync(request.Id);

			if (task is null) {
				throw TasksErrors.TaskNotFound;
			}

			var groups = await _taskRepository.GetTaskGroups(request.Groups);

			if(request.Groups.Count != groups?.Count)
			{
				throw GroupsErrors.GroupNotFound;
			}

			task.Start = request.Start;
			task.End = request.End;
			task.Duration = request.Duration;
			task.OneChance = request.OneChance;
			task.ShowAnswers = request.ShowAnswers;
			task.Shuffle = request.Shuffle;

			await _taskRepository.UpdateAsync(task);

			await _taskRepository.UpdateTaskGroups(request.Id, request.Groups);
		}
	}
}
