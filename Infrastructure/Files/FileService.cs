using Application.Interfaces;
using Azure.Core;
using Domain.Entities;
using Domain.Errors;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Files
{
    public class FileService : IFileService
    {
		public string UploadFile(IFormFile file, string folder, string? replaceFile = null)
        {
            if(file is null)
            {
                throw FilesErrors.InvalidFileExtension;
            }

            List<string> validExtensions = [".jpg", ".jpeg", ".webp", ".png"];

            var extension = Path.GetExtension(file.FileName);

            if(!validExtensions.Contains(extension))
            {
                throw FilesErrors.InvalidFileExtension;
            }

            if(!replaceFile.IsNullOrEmpty())
            {
                DeleteFile(replaceFile);
            }

            var fileName = Guid.NewGuid().ToString() + extension;
            var filePath = Path.Combine(folder, fileName);
            var fullFilePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot/", filePath);

            using (FileStream stream = new(fullFilePath, FileMode.Create))
            {
                file.CopyTo(stream);
            };

			return filePath;
        }

        public void DeleteFile(string path)
        {
            var fullFilePath = Path.Combine(Directory.GetCurrentDirectory(), path);

            if(File.Exists(fullFilePath))
            {
                File.Delete(fullFilePath);
            }
        }
    }
}
