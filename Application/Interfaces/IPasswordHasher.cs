﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IPasswordHasher
    {
        string HashPassword (string password);
        bool VerifyHash (string password, string hashedPassword);
    }
}
