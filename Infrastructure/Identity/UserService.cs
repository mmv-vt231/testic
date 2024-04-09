using Application.Interfaces;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace API.Infrastructure.Identity
{
    public class UserService : IUserService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public UserService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public Guid Id { 
            get => new(_httpContextAccessor.HttpContext.User.FindFirstValue("id")); 
        }

        public Guid GetId()
        {
            var user = _httpContextAccessor.HttpContext.User.Identity;

            var idField = new ClaimsPrincipal(user).Claims.FirstOrDefault(c => c.Type == "id");
            var id = new Guid(idField.Value);

            return id;
        }
    }
}
