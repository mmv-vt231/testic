using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Topics
{
    public record UpdateTopicRequestDTO(
        [Required, StringLength(255)]
        string Title
    );
}
