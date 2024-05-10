using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Test : BaseEntity
    {
        public string Title { get; set; } = string.Empty;
		public float TotalScore { get; set; }

		public Guid TopicId { get; set; }
        public Topic Topic { get; set; }
        public IEnumerable<Question>? Questions { get; set; }
        public IEnumerable<TaskEntity>? Tasks { get; set; }
    }
}
