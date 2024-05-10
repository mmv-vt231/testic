using Application.Extensions;
using Domain.Entities;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Application.Results.CreateResult
{
	public class CreateResultCommandHandler : IRequestHandler<CreateResultCommand, Guid>
	{
		private readonly ITaskRepository _taskRepository;
		private readonly IResultRepository _resultRepository;
		private readonly IStudentRepository _studentRepository;
		private readonly ITestRepository _testRepository;

		public CreateResultCommandHandler(
			ITaskRepository taskRepository, 
			IResultRepository resultRepository, 
			IStudentRepository studentRepository,
			ITestRepository testRepository)
		{
			_taskRepository = taskRepository;
			_resultRepository = resultRepository;
			_studentRepository = studentRepository;
			_testRepository = testRepository;
		}

		public async Task<Guid> Handle(CreateResultCommand request, CancellationToken cancellationToken)
		{
			var task = await _taskRepository.GetTaskDetails(request.TaskId);

			if (task is null)
			{
				throw TasksErrors.TaskNotFound;
			}

			var student = await _studentRepository.GetStudentByEmail(request.Email);

			if (student is null || task.Groups.Contains(student.Group))
			{
				throw StudentsErrors.StudentNotFound;
			}

			if(task.OneChance)
			{
				var studentResult = await _studentRepository.GetStudentTaskResults(task.Id, student.Id);

				if (studentResult is not null)
				{
					throw TasksErrors.TaskOneChance;
				}
			}

			var test = await _testRepository.GetTestDetails(task.Test.Id);
			var questions = test.Questions.OrderByDescending(t => t.CreatedAt);

			List<ResultQuestionsOrder> order = [];

			foreach (var question in test.Questions)
			{
				order.Add(new ResultQuestionsOrder { 
					questionId = question.Id, 
					completed = false
				});
			}

			if (task.ShuffleQuestions)
			{
				order = order.Shuffle();
			} 

			var result = new Result 
			{
				TaskId = task.Id,
				StudentId = student.Id,
				QuestionsOrder = JsonSerializer.Serialize(order),
			};

			await _resultRepository.CreateAsync(result);

			return result.Id;
		}
	}
}
