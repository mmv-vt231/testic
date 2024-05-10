using Domain.Shared;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Errors
{
	public static class TasksErrors
	{
		public static readonly ErrorException TaskNotFound = new("Тестування незнайдено", StatusCodes.Status400BadRequest);
		public static readonly ErrorException TaskOneChance = new("Тестування можна пройти лише 1 раз", StatusCodes.Status400BadRequest);
	}
}
