using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuequeTheme.Models
{
    public class WishViewModel
    {
        public List<Product_CategoryDto> Product_CategoryDtos { get; set; } = new List<Product_CategoryDto>();
        public   PageList<WishDto> PageList{ get; set; } = new PageList<WishDto>(); 
    }
}
