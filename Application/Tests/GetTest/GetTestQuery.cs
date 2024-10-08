﻿using Contracts.Tests;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tests.GetTest
{
    public record GetTestQuery(
        Guid Id
    ) : IRequest<GetTestResponseDTO>;
}
