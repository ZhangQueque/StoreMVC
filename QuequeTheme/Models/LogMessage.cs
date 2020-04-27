using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuequeTheme.Models
{
    public class LogMessage
    {
        public int Id { get; set; }

        public string Content { get; set; }

        public DateTime CreateTime { get; set; }
    }
}
