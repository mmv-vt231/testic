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
        public Guid Id { get; }

		public UserService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;

            var id = _httpContextAccessor.HttpContext?.User?.FindFirstValue("id");

			if (Guid.TryParse(id, out Guid userId))
            {
                Id = userId;
            }
        }
    }
}
