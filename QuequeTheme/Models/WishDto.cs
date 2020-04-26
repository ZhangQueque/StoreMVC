using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuequeTheme.Models
{
    /// <summary>
    /// 收藏Dto模型
    /// </summary>
    public class WishDto
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public DateTime CreateTime { get; set; }
        public string Title { get; set; }
        public string ShortDescribe { get; set; }
        public float Price { get; set; }
        public string Pictrue { get; set; }

    }
}
