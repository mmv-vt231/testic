using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Results.FinishTesting
{
	public class FinishTestingCommandHandler : IRequestHandler<FinishTestingCommand>
	{
		private readonly IResultRepository _resultRepository;
		public FinishTestingCommandHandler(IResultRepository resultRepository)
		{
			_resultRepository = resultRepository;
		}

		public async Task Handle(FinishTestingCommand request, CancellationToken cancellationToken)
		{
			var result = await _resultRepository.GetByIdAsync(request.ResultId);

			if (result is null)
			{
				throw ResultsErrors.ResultNotFound;
			}

			result.End = DateTime.Now;
			result.Completed = true;

			await _resultRepository.UpdateAsync(result);
		}
	}
}
