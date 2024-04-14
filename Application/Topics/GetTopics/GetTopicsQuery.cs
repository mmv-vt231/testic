using Contracts.Topics;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Topics.GetTopics
{
    public record GetTopicsQuery() : IRequest<IEnumerable<GetTopicsResponseDTO>>;
}
