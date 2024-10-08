﻿using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IFileService
    {
        string UploadFile(IFormFile file, string folder, string? replaceFile = null);
        void DeleteFile(string path);
    }
}
