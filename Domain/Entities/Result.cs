using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Result : BaseEntity
    {
        public int Correct { get; set; }
        public int Half { get; set; }
        public int Wrong { get; set; }
        public float Score { get; set; }
        public DateTime Start { get; set; }
        public DateTime? End { get; set; }
        public string Answers { get; set; } = "[]";
		public string QuestionsOrder { get; set; } = "[]";
		public bool Completed { get; set; }

        public Guid TaskId { get; set; }
        public TaskEntity Task { get; set; }

        public Guid StudentId { get; set; }
        public Student Student { get; set; }
    }
}
