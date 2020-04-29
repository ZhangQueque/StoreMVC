 
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

        public PageList<OrderDto> PageListStatus { get; set; } = new PageList<OrderDto>();

        public PageList<OrderDto> PageListStatus0 { get; set; } = new PageList<OrderDto>();
        public PageList<OrderDto> PageListStatus1 { get; set; } = new PageList<OrderDto>();
        public PageList<OrderDto> PageListStatus2 { get; set; } = new PageList<OrderDto>();
        public PageList<OrderDto> PageListStatus3 { get; set; } = new PageList<OrderDto>();

        public PageList<OrderDto> PageListStatus4 { get; set; } = new PageList<OrderDto>();

        public PageList<OrderDto> PageListStatus5 { get; set; } = new PageList<OrderDto>();

    }
}
