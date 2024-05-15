using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Question : BaseEntity
    {
        public string Title { get; set; } = string.Empty;
        public string? Image { get; set; }
        public float Points { get; set; }
        public string Type { get; set; } = string.Empty;
        public string Data { get; set; } = string.Empty;
        public string Keys { get; set; } = string.Empty;

        public Guid? TestId { get; set; }
        public Test Test { get; set; }
    }
}
