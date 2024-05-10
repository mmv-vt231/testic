using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Results.DeleteResult
{
	public class DeleteResultCommandHandler : IRequestHandler<DeleteResultCommand>
	{
		private readonly IResultRepository _resultRepository;
		public DeleteResultCommandHandler(IResultRepository resultRepository)
		{
			_resultRepository = resultRepository;
		}

		public async Task Handle(DeleteResultCommand request, CancellationToken cancellationToken)
		{
			var result = await _resultRepository.GetByIdAsync(request.Id);

			if (result is null)
			{
				throw ResultsErrors.ResultNotFound;
			}

			await _resultRepository.DeleteAsync(result);
		}
	}
}
