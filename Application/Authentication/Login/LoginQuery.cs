﻿using Contracts.Auth;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Authentication.Login
{
    public record LoginQuery(
        string Email, 
        string Password
    ) : IRequest<LoginResponseDTO>;
}
