using Application.Interfaces;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Authentication
{
    public class PasswordHasher : IPasswordHasher
    {
        private readonly PasswordHasherSettings _settings;

        public PasswordHasher(IOptions<PasswordHasherSettings> settings)
        {
            _settings = settings.Value;
        }

        public string HashPassword(string password)
        {            
            var hash = Rfc2898DeriveBytes.Pbkdf2(
                Encoding.UTF8.GetBytes(password),
                Encoding.UTF8.GetBytes(_settings.Salt), 
                _settings.Iterations, 
                HashAlgorithmName.SHA256, 
                _settings.KeySize);

            return Convert.ToHexString(hash);
        }

        public bool VerifyHash(string password, string hashedPassword)
        {
            var hashToCompare = Rfc2898DeriveBytes.Pbkdf2(
                password,
                Encoding.UTF8.GetBytes(_settings.Salt), 
                _settings.Iterations, 
                HashAlgorithmName.SHA256, 
                _settings.KeySize);

            return CryptographicOperations.FixedTimeEquals(hashToCompare, Convert.FromHexString(hashedPassword));
        }
    }
}
