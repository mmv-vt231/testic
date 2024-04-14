using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tests.UpdateTest
{
    public class UpdateTestCommandHandler : IRequestHandler<UpdateTestCommand>
    {
        private readonly ITestRepository _testRepository;
        public UpdateTestCommandHandler(ITestRepository testRepository)
        {
            _testRepository = testRepository;
        }

        public async Task Handle(UpdateTestCommand request, CancellationToken cancellationToken)
        {
            var test = await _testRepository.GetByIdAsync(request.Id);

            if (test is null) {
                throw TestsErrors.TestNotFound; 
            }

            test.Title = request.Title;

            await _testRepository.UpdateAsync(test);
        }
    }
}
