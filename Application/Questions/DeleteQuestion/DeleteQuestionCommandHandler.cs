using Application.Interfaces;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Questions.DeleteQuestion
{
    public class DeleteQuestionCommandHandler : IRequestHandler<DeleteQuestionCommand>
    {
        private readonly IQuestionRepository _questionRepository;
		private readonly ITestRepository _testRepository;
		private readonly IFileService _fileService;

        public DeleteQuestionCommandHandler(
            IQuestionRepository questionRepository,
			ITestRepository testRepository,
			IFileService fileService)
        {
            _questionRepository = questionRepository;
            _testRepository = testRepository;
            _fileService = fileService;
        }

        public async Task Handle(DeleteQuestionCommand request, CancellationToken cancellationToken)
        {
            var question = await _questionRepository.GetByIdAsync(request.Id);

            if (question is null)
            {
                throw QuestionsErrors.QuestionNotFound;
            }

            var test = await _testRepository.GetByIdAsync(question.TestId);

			if (!question.Image.IsNullOrEmpty())
            {
                _fileService.DeleteFile(question.Image);
			}

			test.TotalScore -= question.Points;

			await _questionRepository.DeleteAsync(question);
            await _testRepository.UpdateAsync(test);
        }
    }
}
