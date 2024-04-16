using MediatR;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Questions.UpdateQuestion
{
    public record UpdateQuestionCommand(
        Guid Id,
        string Title,
        IFormFile? Image,
        float Points,
        string Type,
        string Data,
        string Keys
    ) : IRequest;
}
