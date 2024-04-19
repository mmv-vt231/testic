﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Auth
{
	public record RegisterRequestDTO(
		[Required, StringLength(255)]
		string Name,

		[Required, StringLength(255)]
		string Surname,

		[Required, EmailAddress, StringLength(255)]
		string Email,

		[Required, StringLength(255)]
		string Password
	);
}
