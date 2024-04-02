using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Authentication.Register
{
    public record RegisterCommand(
        string Name, 
        string Surname, 
        string Email, 
        string Password) : IRequest;
}
