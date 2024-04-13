using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace API.Infrastructure
{
    public class GlobalExceptionHandler : IExceptionHandler
    {
        private readonly ILogger<GlobalExceptionHandler> _logger;

        public GlobalExceptionHandler(ILogger<GlobalExceptionHandler> logger)
        {
            _logger = logger;
        }

        public async ValueTask<bool> TryHandleAsync(
            HttpContext httpContext,
            Exception exception,
            CancellationToken cancellationToken)
        {
            _logger.LogError(exception, "Exception occurred: {Message}", exception.Message);

            var code = exception.Data.Contains("Code") ? (int)exception.Data["Code"] : 500;
            var title = exception.Data.Contains("Code") ? exception.Message : "Unknown Error";
            var detail = exception.Data.Contains("Detail") ? (string)exception.Data["Detail"] : null;

            var problemDetails = new ProblemDetails
            {
                Status = code,
                Title = title,
                Detail = detail,
            };

            httpContext.Response.StatusCode = code;

            await httpContext.Response.WriteAsJsonAsync(problemDetails, cancellationToken);

            return true;
        }
    }
}
