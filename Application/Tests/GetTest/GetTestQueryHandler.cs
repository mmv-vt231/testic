using Contracts.Questions;
using Contracts.Tests;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Application.Tests.GetTest
{
    public class GetTestQueryHandler : IRequestHandler<GetTestQuery, GetTestResponseDTO>
    {
        private readonly ITestRepository _testRepository;
        public GetTestQueryHandler(ITestRepository testRepository)
        {
            _testRepository = testRepository;
        }

        public async Task<GetTestResponseDTO> Handle(GetTestQuery request, CancellationToken cancellationToken)
        {
            var test = await _testRepository.GetTestDetails(request.Id);

            if (test is null)
            {
                throw TestsErrors.TestNotFound;
            }

            var questions = test.Questions?.Select(q => new QuestionDTO(
                q.Id,
                q.Title,
                q.Image,
                q.Points,
                q.Type,
				q.Data,
				q.Keys
            )).ToList();

            return new GetTestResponseDTO(
                test.Id, 
                test.Title,
				questions
			);
        }
    }
}
