using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tests.DeleteTest
{
    public class DeleteTestCommandHandler : IRequestHandler<DeleteTestCommand>
    {
        private readonly ITestRepository _testRepository;
        public DeleteTestCommandHandler(ITestRepository testRepository)
        {
            _testRepository = testRepository;
        }

        public async Task Handle(DeleteTestCommand request, CancellationToken cancellationToken)
        {
            var test = await _testRepository.GetByIdAsync(request.Id);

            if (test is null)
            {
                throw TestsErrors.TestNotFound;
            }

            await _testRepository.DeleteAsync(test);
        }
    }
}
