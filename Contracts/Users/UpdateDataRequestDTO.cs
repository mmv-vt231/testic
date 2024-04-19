using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Users
{
	public record UpdateDataRequestDTO(
		[Required, StringLength(255)]
		string Name,

		[Required, StringLength(255)]
		string Surname
	);
}
