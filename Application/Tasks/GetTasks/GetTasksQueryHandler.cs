﻿using Contracts.Tasks;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tasks.GetTasks
{
	public class GetTasksQueryHandler : IRequestHandler<GetTasksQuery, IEnumerable<GetTasksReponseDTO>>
	{
		private readonly ITopicRepository _topicRepository;

		public GetTasksQueryHandler(ITopicRepository topicRepository)
		{
			_topicRepository = topicRepository;
		}

		public async Task<IEnumerable<GetTasksReponseDTO>> Handle(GetTasksQuery request, CancellationToken cancellationToken)
		{
			var tasks = await _topicRepository.GetAllTopicTasks(request.Id);

			var response = tasks?
				.OrderByDescending(t => t.CreatedAt)
				.Select(t =>
				{
					var status = "";
					var start = DateTime.Compare(t.Start, DateTime.Now);
					var end = DateTime.Compare(t.End, DateTime.Now);

					if (start > 0)
						status = "planned";
					else if (start <= 0 && end >= 0)
						status = "active";
					else
						status = "finished";

					return new GetTasksReponseDTO(
						t.Id,
						t.Test.Title,
						t.Start,
						t.End,
						status,
						t.Groups?.OrderByDescending(g => g.CreatedAt)
						.Select(g => new GetTasksGroupDTO(
							g.Id,
							g.Name
						))
						.ToList()
					);
				})
			.ToList();

			return response;
		}
	}
}
