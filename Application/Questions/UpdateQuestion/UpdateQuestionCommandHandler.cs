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

namespace Application.Questions.UpdateQuestion
{
    public class UpdateQuestionCommandHandler : IRequestHandler<UpdateQuestionCommand>
    {
        private readonly IQuestionRepository _questionRepository;
        private readonly IFileService _fileService;

        public UpdateQuestionCommandHandler(IQuestionRepository questionRepository, IFileService fileService)
        {
            _questionRepository = questionRepository;
            _fileService = fileService;
        }

        public async Task Handle(UpdateQuestionCommand request, CancellationToken cancellationToken)
        {
            var question = await _questionRepository.GetByIdAsync(request.Id);

            if (question is null)
            {
                throw QuestionsErrors.QuestionNotFound;
            }

            if (request.Image is not null) {
                question.Image = _fileService.UploadFile(request.Image, "wwwroot/images", question.Image);
            }

            question.Title = request.Title;
            question.Points = request.Points;
            question.Type = request.Type;
            question.Data = request.Data;
            question.Keys = request.Keys;

            await _questionRepository.UpdateAsync(question);
        }
    }
}
