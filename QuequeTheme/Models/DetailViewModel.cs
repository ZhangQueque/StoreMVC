using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuequeTheme.Models
{
    public class DetailViewModel
    {
        public List<Product_CategoryDto> Product_CategoryDtos { get; set; } = new List<Product_CategoryDto>();

        public Product Product { get; set; }
        public List<Product> NewProducts { get; set; } = new List<Product>();
    }
}
