 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuequeTheme.Models
{
    public class AdminViewModel
    {
        public UserDto UserDto { get; set; }

        public List<LogMessage> LogMessages { get; set; }
    }
}
