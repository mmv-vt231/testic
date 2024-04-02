using Domain.Shared;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Errors
{
    public class AuthenticationErrors
    {
        public static readonly ErrorException InvalidCredentials = new("Invalid credentials", StatusCodes.Status400BadRequest);

        public static readonly ErrorException EmailExists = new("User with this email already exist", StatusCodes.Status400BadRequest);

        public static readonly ErrorException Unauthorized = new("Unauthorized", StatusCodes.Status401Unauthorized);
    }
}
