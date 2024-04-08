using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.DTOs
{
    public class GetGroupsResponseDTO()
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int? StudentsCount { get; set; }
    };
}
