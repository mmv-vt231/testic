using Domain.Shared;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Errors
{
    public static class UsersErrors
    {
        public static readonly ErrorException UserNotFound = new("Користувач не знайдений", StatusCodes.Status400BadRequest);

        public static readonly ErrorException IncorrectPassword = new("Невірний пароль", StatusCodes.Status400BadRequest);
    }
}
