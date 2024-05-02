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
using System.Text.Json.Nodes;
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

			var questions = test.Questions?
                .OrderBy(q => q.CreatedAt)
                .Select(q => {
				    JsonNode data = JsonSerializer.Deserialize<JsonNode>(q.Data);
				    JsonNode keys = JsonSerializer.Deserialize<JsonNode>(q.Keys);

				    return new QuestionDTO(
                        q.Id,
                        q.Title,
                        q.Image,
                        q.Points,
                        q.Type,
					    data,
					    keys
				    );
                }).ToList();

            return new GetTestResponseDTO(
                test.Id, 
                test.Title,
				questions
			);
        }
    }
}
