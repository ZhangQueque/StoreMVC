 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuequeTheme.Models
{
    public class AdminViewModel
    {
        public UserDto UserDto { get; set; } = new UserDto();

        public List<LogMessage> LogMessages { get; set; } = new List<LogMessage>();

        public List<CommonData> CommonDatas { get; set; } = new List<CommonData>();

        public List<ChartDto> ChartDtos { get; set; } = new List<ChartDto>();
    }
}
