using Domain.Shared;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Errors
{
    public static class TopicErrors
    {
        public static readonly ErrorException TopicNotFound = new("Тема незнайдена", StatusCodes.Status400BadRequest);
    }
}
