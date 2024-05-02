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
		string? Image,
        float Points,
        string Type,
		dynamic Data,
		dynamic Keys
    ) : IRequest;
}
