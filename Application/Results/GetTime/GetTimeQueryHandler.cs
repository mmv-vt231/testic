using Contracts.Results;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Results.GetTime
{
	public class GetTimeQueryHandler : IRequestHandler<GetTimeQuery, GetTimeResponseDTO>
	{
		private readonly IResultRepository _resultRepository;
		private readonly ITaskRepository _taskRepository;
		public GetTimeQueryHandler(
			IResultRepository resultRepository, 
			ITaskRepository taskRepository)
		{
			_resultRepository = resultRepository;
			_taskRepository = taskRepository;
		}

		public async Task<GetTimeResponseDTO> Handle(GetTimeQuery request, CancellationToken cancellationToken)
		{
			var result = await _resultRepository.GetByIdAsync(request.Id);

			if (result is null || result.Completed)
			{
				throw ResultsErrors.ResultNotFound;
			}

			var task = await _taskRepository.GetByIdAsync(result.TaskId);
			var dateEnd = result.Start.AddMinutes(task.Duration);
			var seconds = (int)(dateEnd - DateTime.Now).TotalSeconds;

			return new GetTimeResponseDTO(
				seconds
			);
		}
	}
}
