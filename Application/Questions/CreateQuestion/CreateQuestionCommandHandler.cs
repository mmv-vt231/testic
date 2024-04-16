using Application.Interfaces;
using Domain.Entities;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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

            string? imageUrl = null;

            if (request.Image is not null)
            {
                imageUrl = _fileService.UploadFile(request.Image, "wwwroot/images");
            }

            var question = new Question
            {
                Title = request.Title,
                Image = imageUrl,
                Points = request.Points,
                Type = request.Type,
                Data = request.Data,
                Keys = request.Keys,
                TestId = request.TestId,
            };

            await _questionRepository.CreateAsync(question);
        }
    }
}
