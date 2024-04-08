using Domain.Entities;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IJwtTokenUtils
    {
        string GenerateToken(User user);
        JwtSecurityToken DecodeJwt(string jwt);
    }
}
