using Contracts.Tests;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tests.GetTests
{
	public class GetTestsQueryHandler : IRequestHandler<GetTestsQuery, IEnumerable<TestDTO>>
	{
		private readonly ITopicRepository _topicRepository;
		public GetTestsQueryHandler(ITopicRepository topicRepository)
		{
			_topicRepository = topicRepository;
		}

		public async Task<IEnumerable<TestDTO>> Handle(GetTestsQuery request, CancellationToken cancellationToken)
		{
			var topic = await _topicRepository.GetByIdAsync(request.Id);

			if(topic is null)
			{
				throw TopicsErrors.TopicNotFound;
			}

			var tests = await _topicRepository.GetAllTopicTests(request.Id);

			var response = tests?.Select(t => new TestDTO(
				t.Id,
				t.Title,
				t.CreatedAt
			))
			.OrderByDescending(t => t.CreatedAt)
			.ToList();

			return response;
		}
	}
}
