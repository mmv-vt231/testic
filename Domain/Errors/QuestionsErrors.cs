using Domain.Shared;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Errors
{
    public static class QuestionsErrors
    {
        public static readonly ErrorException QuestionNotFound = new("Питання не знайдено", StatusCodes.Status400BadRequest);
    }
}
