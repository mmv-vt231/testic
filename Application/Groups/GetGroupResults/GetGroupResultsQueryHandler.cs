using Contracts.Groups;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Groups.GetGroupResults
{
	public class GetGroupResultsQueryHandler : IRequestHandler<GetGroupResultsQuery, GetGroupResultsResponseDTO>
	{
		private readonly IGroupRepository _groupRepository;

		public GetGroupResultsQueryHandler(IGroupRepository groupRepository)
		{
			_groupRepository = groupRepository;
		}

		public async Task<GetGroupResultsResponseDTO> Handle(GetGroupResultsQuery request, CancellationToken cancellationToken)
		{
			var group = await _groupRepository.GetGroupResults(request.Id);

			if(group is null)
			{
				throw GroupsErrors.GroupNotFound;
			}

			var tasks = group.Tasks.Select(t => new GetGroupResultsTaskDTO(
				t.Id,
				t.Test.Title
			)).ToList();

			var students = group.Students
				.OrderBy(s => s.FullName)
				.Select(s => new GetGroupResultsStudentDTO(
					s.Id,
					s.FullName,
					s.Results.GroupBy(r => r.TaskId)
						.Select(g => g.OrderByDescending(x => x.Score).First())
						.Select(r => new GetGroupResultsStudentResultDTO(
							r.StudentId,
							r.TaskId,
							(float)Math.Round(r.Score, 2)
						)).ToList()
				)).ToList();

			return new GetGroupResultsResponseDTO(
				group.Name,
				group.Students.Count(),
				group.Tasks.Count(),
				tasks,
				students
			);
		}
	}
}
