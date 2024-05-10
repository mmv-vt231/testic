using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class ResultQuestionsOrder
    {
		public Guid questionId { get; set; }
		public bool completed { get; set; }
	}
}
