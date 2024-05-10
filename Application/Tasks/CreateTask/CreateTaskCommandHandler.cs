using Domain.Entities;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tasks.CreateTask
{
	public class CreateTaskCommandHandler : IRequestHandler<CreateTaskCommand>
	{
		private readonly ITestRepository _testRepository;
		private readonly ITopicRepository _topicRepository;
		private readonly ITaskRepository _taskRepository;

		public CreateTaskCommandHandler(
			ITestRepository testRepository,
			ITopicRepository topicRepository,
			ITaskRepository taskRepository)
		{
			_testRepository = testRepository;
			_topicRepository = topicRepository;
			_taskRepository = taskRepository;
		}

		public async Task Handle(CreateTaskCommand request, CancellationToken cancellationToken)
		{
			var topic = await _topicRepository.GetByIdAsync(request.TopicId);

			if (topic is null)
			{
				throw TopicsErrors.TopicNotFound;
			}

			var test = await _testRepository.GetByIdAsync(request.TestId);

			if (test is null)
			{
				throw TestsErrors.TestNotFound;
			}

			var groups = await _taskRepository.GetTaskGroups(request.Groups);

			var task = new TaskEntity
			{
				TestId = request.TestId,
				TopicId = request.TopicId,
				Groups = groups,
				Start = request.Start,
				End = request.End,
				Duration = request.Duration,
				OneChance = request.OneChance,
				ShowAnswers = request.ShowAnswers,
				ShuffleQuestions = request.ShuffleQuestions,
			};

			await _taskRepository.CreateAsync(task);
		}
	}
}
