using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
 

namespace QuequeTheme.Models
{
     
    public class Product_CategoryDto
    {
         
        public int Id { get; set; }
        
        public string Title { get; set; }

        
        public int PId { get; set; }

        
        public int SortId { get; set; }

       
        public int Status { get; set; }

        [DataType(DataType.Date)]
        public DateTime CreateTime { get; set; }

       
        public List<Product_CategoryDto> ChildList { get; set; } = new List<Product_CategoryDto>();
        public List<Product> ProductList { get; set; } = new List<Product>();

    }
}
