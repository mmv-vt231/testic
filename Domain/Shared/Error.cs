using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Shared
{
    public class ErrorException : Exception
    {
        public int Code { get; }
        public string? Detail { get; }

        public ErrorException(
            string message,
            int code = StatusCodes.Status500InternalServerError,
            string? detail = null) : base(message)
        {
            Code = code;
            base.Data.Add("Code", code);

            Detail = detail;
            base.Data.Add("Detail", detail);
        }
    }
}
