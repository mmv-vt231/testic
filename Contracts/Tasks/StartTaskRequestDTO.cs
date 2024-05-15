using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Tasks
{
	public record StartTaskRequestDTO(
		[Required, EmailAddress, StringLength(255)]
		string Email
	);
}
