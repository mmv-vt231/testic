using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class TaskEntity : BaseEntity
	{
		public DateTime Start { get; set; }
		public DateTime End { get; set; }
		public int Duration { get; set; }
		public bool OneChance { get; set; }
		public bool ShowAnswers { get; set; }
		public bool ShuffleQuestions { get; set; }

		public Guid? TestId { get; set; }
		public Test Test { get; set; }

		public Guid? TopicId { get; set; }
		public Topic Topic { get; set; }

		public ICollection<Group> Groups { get; set; } = [];

		public IEnumerable<Result> Results { get; set; }
	}
}
