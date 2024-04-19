using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Students
{
    public record CreateStudentRequestDTO(
        [Required, StringLength(255)]
        string FullName,

		[Required, EmailAddress, StringLength(255)]
		string Email
    );
}
