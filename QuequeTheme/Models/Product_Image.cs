﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace QuequeTheme.Models
{
    /// <summary>
    /// 商品图片表
    /// </summary>
    public class Product_Image
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Image { get; set; }
        public int ProductId { get; set; }
     }
}
