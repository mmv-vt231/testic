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
        private readonly IFileService _fileService;

        public DeleteQuestionCommandHandler(IQuestionRepository questionRepository, IFileService fileService)
        {
            _questionRepository = questionRepository;
            _fileService = fileService;
        }

        public async Task Handle(DeleteQuestionCommand request, CancellationToken cancellationToken)
        {
            var question = await _questionRepository.GetByIdAsync(request.Id);

            if (question is null)
            {
                throw QuestionsErrors.QuestionNotFound;
            }

            if (!question.Image.IsNullOrEmpty())
            {
                _fileService.DeleteFile(question.Image);
            }

            await _questionRepository.DeleteAsync(question);
        }
    }
}
