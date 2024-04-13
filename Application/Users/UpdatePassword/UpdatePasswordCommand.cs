using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Users.UpdatePassword
{
    public record UpdatePasswordCommand(
        string Password,
        string NewPassword
    ) : IRequest;
}
