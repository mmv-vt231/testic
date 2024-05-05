using Contracts.Tests;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tests.GetTests
{	
	public record GetTestsQuery(
		Guid Id
	) : IRequest<IEnumerable<TestDTO>>;
}
