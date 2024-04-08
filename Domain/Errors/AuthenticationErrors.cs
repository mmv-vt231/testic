using Domain.Shared;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Errors
{
    public static class AuthenticationErrors
    {
        public static readonly ErrorException InvalidCredentials = new("Email або пароль введені невірно", StatusCodes.Status400BadRequest);

        public static readonly ErrorException EmailExists = new("Користувач з такою поштою вже існує", StatusCodes.Status400BadRequest);

        public static readonly ErrorException Unauthorized = new("Unauthorized", StatusCodes.Status401Unauthorized);
    }
}
