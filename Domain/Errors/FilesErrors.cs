using Domain.Shared;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Errors
{
    public static class FilesErrors
    {
        public readonly static ErrorException InvalidFileExtension = new ("Невірний формат файлу", StatusCodes.Status415UnsupportedMediaType);
    }
}
