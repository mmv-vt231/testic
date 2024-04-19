using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Groups
{
	public record CreateGroupRequestDTO(
		[Required, StringLength(255)]
		string Name
	);
}
