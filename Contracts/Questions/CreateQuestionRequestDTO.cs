using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Questions
{
    public record CreateQuestionRequestDTO(
        [Required, StringLength(25555)]
        string Title,

        IFormFile? Image,

		[Required, Range(0, 100)]
		float Points,

		[Required, StringLength(255)]
		string Type,

		[Required]
		string Data,

		[Required]
		string Keys
	);
}
