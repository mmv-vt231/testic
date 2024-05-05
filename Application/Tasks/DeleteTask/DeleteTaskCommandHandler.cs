using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tasks.DeleteTask
{
	public class DeleteTaskCommandHandler : IRequestHandler<DeleteTaskCommand>
	{
		private readonly ITaskRepository _taskRepository;
		public DeleteTaskCommandHandler(ITaskRepository taskRepository)
		{
			_taskRepository = taskRepository;
		}

		public async Task Handle(DeleteTaskCommand request, CancellationToken cancellationToken)
		{
			var task = await _taskRepository.GetByIdAsync(request.Id);

			if(task is null)
			{
				throw TasksErrors.TaskNotFound;
			}

			await _taskRepository.DeleteAsync(task);
		}
	}
}
