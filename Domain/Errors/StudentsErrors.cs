﻿using Domain.Shared;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Errors
{
    public static class StudentsErrors
    {
        public static readonly ErrorException StudentNotFound = new("Студент незнайдений", StatusCodes.Status400BadRequest);
    }
}
