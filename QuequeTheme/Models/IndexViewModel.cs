using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuequeTheme.Models
{
    public class IndexViewModel
    {
        public List<Product_CategoryDto> Product_CategoryDtos { get; set; } = new List<Product_CategoryDto>();

        public List<Product> NewProducts { get; set; } = new List<Product>();
        public List<Product> ShopTopProducts { get; set; } = new List<Product>();

        public List<Product> PageViewTopProducts { get; set; } = new List<Product>();
    }
}
