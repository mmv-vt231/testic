using Application.Interfaces;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Application.Questions.UpdateQuestion
{
    public class UpdateQuestionCommandHandler : IRequestHandler<UpdateQuestionCommand>
    {
        private readonly IQuestionRepository _questionRepository;
		private readonly ITestRepository _testRepository;
		private readonly IFileService _fileService;

        public UpdateQuestionCommandHandler(
            IQuestionRepository questionRepository,
			ITestRepository testRepository,
			IFileService fileService)
        {
            _questionRepository = questionRepository;
            _testRepository = testRepository;
            _fileService = fileService;
        }

        public async Task Handle(UpdateQuestionCommand request, CancellationToken cancellationToken)
        {
            var question = await _questionRepository.GetByIdAsync(request.Id);

            if (question is null)
            {
                throw QuestionsErrors.QuestionNotFound;
            }

            var test = await _testRepository.GetByIdAsync(request.Id);

            test.TotalScore = (test.TotalScore - question.Points) + request.Points;

			string data = JsonSerializer.Serialize(request.Data);
			string keys = JsonSerializer.Serialize(request.Keys);

			question.Title = request.Title;
            question.Image = request.Image;
			question.Points = request.Points;
            question.Type = request.Type;
            question.Data = data;
            question.Keys = keys;

            await _questionRepository.UpdateAsync(question);
            await _testRepository.UpdateAsync(test);
        }
    }
}
