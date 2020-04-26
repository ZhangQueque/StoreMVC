using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuequeTheme.Models
{
    public class CartViewModel
    {
        public List<Product_CategoryDto> Product_CategoryDtos { get; set; } = new List<Product_CategoryDto>();
        public PageList<CartDto> PageList { get; set; } = new PageList<CartDto>();
    }
}
