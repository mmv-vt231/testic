﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts.DTOs.Topics
{
    public record GetTopicResponseDTO(
        Guid Id,
        string Title,
        IEnumerable<TestDTO> Tests
    );
}
