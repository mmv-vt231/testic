using Domain.Shared;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Errors
{
    public static class TestsErrors
    {
        public static readonly ErrorException TestNotFound = new ("Тест незнайдений", StatusCodes.Status400BadRequest);
    }
}
