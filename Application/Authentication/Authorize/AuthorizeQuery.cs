using Contracts.Users;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Authentication.Authorize
{
    public record AuthorizeQuery() : IRequest<UserDTO>;
}
