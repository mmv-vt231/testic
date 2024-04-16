using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Questions.DeleteQuestion
{
    public record DeleteQuestionCommand(Guid Id) : IRequest;
}
