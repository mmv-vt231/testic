using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Auth
{
	public record LoginRequestDTO(
		[Required, EmailAddress, StringLength(255)]
		string Email,

		[Required, StringLength(255)]
		string Password
	);
}
