using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.Questions
{
    public record QuestionRecordDTO(
        Guid Id,
        string Text,
        string Image
    );
}
