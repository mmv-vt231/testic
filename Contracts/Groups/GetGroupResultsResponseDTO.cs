using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Groups
{
	public record GetGroupResultsResponseDTO(
		string Name,
		int StudentsCount,
		int TasksCount,
		IEnumerable<GetGroupResultsTaskDTO> Tasks,
		IEnumerable<GetGroupResultsStudentDTO> Students
	);

	public record GetGroupResultsTaskDTO(
		Guid Id,
		string Title
	);

	public record GetGroupResultsStudentDTO(
		Guid Id,
		string FullName,
		IEnumerable<GetGroupResultsStudentResultDTO> Results
	);

	public record GetGroupResultsStudentResultDTO(
		Guid StudentId,
		Guid TaskId,
		float Score
	);
}
