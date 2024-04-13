using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Users.UpdateData
{
    public record UpdateDataCommand(
        string Name,
        string Surname
    ) : IRequest;
}
