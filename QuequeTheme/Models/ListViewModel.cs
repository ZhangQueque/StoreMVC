using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuequeTheme.Models
{

    /// <summary>
    /// 列表页试图模型
    /// </summary>
    public class ListViewModel
    {
        public List<Product_CategoryDto> Product_CategoryDtos { get; set; } = new List<Product_CategoryDto>();

        public PageList<Product> PageList { get; set; } = new PageList<Product>();
    }
}
