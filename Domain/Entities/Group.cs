using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Group : BaseEntity
    {
        public string Name { get; set; } = string.Empty;

        public Guid UserId { get; set; }
        public User User { get; set; }

        public IEnumerable<Student>? Students { get; set; }

        public ICollection<TaskEntity>? Tasks { get; set; } = [];
    }
}
