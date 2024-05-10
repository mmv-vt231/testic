using Application.Interfaces;
using Domain.Entities;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System.Text.Json;

namespace Application.Questions.CreateQuestion
{
    public class CreateQuestionCommandHandler : IRequestHandler<CreateQuestionCommand>
    {
        private readonly IQuestionRepository _questionRepository;
        private readonly ITestRepository _testRepository;
        private readonly IFileService _fileService;

        public CreateQuestionCommandHandler(
            IQuestionRepository questionRepository, 
            ITestRepository testRepository,
            IFileService fileService)
        {
            _questionRepository = questionRepository;
            _testRepository = testRepository;
            _fileService = fileService;
        }

        public async Task Handle(CreateQuestionCommand request, CancellationToken cancellationToken)
        {
            var test = await _testRepository.GetByIdAsync(request.TestId);

            if (test is null)
            {
                throw TestsErrors.TestNotFound;
            }

			string data = JsonSerializer.Serialize(request.Data);
			string keys = JsonSerializer.Serialize(request.Keys); 

            var question = new Question
            {
                Title = request.Title,
                Image = request.Image,
                Points = request.Points,
                Type = request.Type,
                Data = data,
                Keys = keys,
                TestId = request.TestId,
            };

            test.TotalScore += request.Points;

			await _questionRepository.CreateAsync(question);
			await _testRepository.UpdateAsync(test);
		}
    }
}
