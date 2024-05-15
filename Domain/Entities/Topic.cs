using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Topic : BaseEntity
    {
        public string Title { get; set; } = string.Empty;

        public Guid UserId { get; set; }
        public User User { get; set; }
        public IEnumerable<Test> Tests { get; set; }
        public IEnumerable<TaskEntity> Tasks { get; set; }
    }
}
