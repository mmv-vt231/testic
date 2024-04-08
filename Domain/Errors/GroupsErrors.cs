using Domain.Shared;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Errors
{
    public static class GroupsErrors
    {
        public static readonly ErrorException GroupNotFound = new("Групу не знайдено", StatusCodes.Status400BadRequest);
    }
}
