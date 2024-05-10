using Domain.Shared;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Errors
{
	public static class ResultsErrors
	{
		public static readonly ErrorException ResultNotFound = new("Тестування незнайдено", StatusCodes.Status400BadRequest);

		public static readonly ErrorException QuestionEditDenied = new("Неможливо зарахувати питання", StatusCodes.Status403Forbidden);
		
		public static readonly ErrorException ResultEditDenied = new("Неможливо зарахувати відповідь", StatusCodes.Status403Forbidden);
	}
}
