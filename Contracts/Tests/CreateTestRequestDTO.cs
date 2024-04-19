using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Tests
{
    public record CreateTestRequestDTO(
        [Required, StringLength(255)]
        string Title
    );
}
