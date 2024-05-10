using Contracts.Tasks;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tasks.GetTaskStartInfo
{
    public record GetTaskStartInfoQuery(
        Guid Id
    ) : IRequest<GetTaskStartInfoResponseDTO>;
}
