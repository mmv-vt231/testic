using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Users
{
	public record UpdatePasswordRequestDTO(
		[Required, StringLength(255)]
		string Password,

		[Required, StringLength(255)]
		string NewPassword
	);
}
