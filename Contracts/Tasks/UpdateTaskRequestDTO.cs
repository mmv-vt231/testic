﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Tasks
{
	public record UpdateTaskRequestDTO(
		ICollection<Guid> Groups,
		DateTime Start,
		DateTime End,
		int? Duration,
		bool OneChance,
		bool ShowAnswers,
		bool Shuffle
	);
}
