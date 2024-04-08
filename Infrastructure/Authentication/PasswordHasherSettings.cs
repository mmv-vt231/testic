using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Authentication
{
    public class PasswordHasherSettings
    {
        public string Salt {  get; set; }
        public int KeySize { get; set; }
        public int Iterations { get; set; }
    }

}
