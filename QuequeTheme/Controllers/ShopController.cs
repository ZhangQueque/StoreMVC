using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using QuequeTheme.Models;

namespace QuequeTheme.Controllers
{
    public class ShopController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly HttpClient httpClient;
        public ShopController(ILogger<HomeController> logger, IHttpClientFactory httpClientFactory)
        {
            _logger = logger;
            httpClient = httpClientFactory.CreateClient("api1");
        }


        /// <summary>
        /// /购物车列表
        /// </summary>
        /// <param name="index">页索引</param>
        /// <param name="size">每页显示个数</param>
        /// <returns></returns>
        public async Task< IActionResult> CartList(int index = 1, int size = 5)
        {
            CartViewModel cartViewModel = new CartViewModel();
            var response = await httpClient.GetAsync("/api/cates/0");

            if (response.IsSuccessStatusCode)
            {
                cartViewModel.Product_CategoryDtos = await response.Content.ReadAsJsonAsync<List<Product_CategoryDto>>();
            }
            var token = Request.Cookies["token"];

            if (token == "null")
            {
                return RedirectToAction("Login", "Account");
            }

            httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
            var cartResponse = await httpClient.GetAsync($"/api/carts?index={index}&size={size}");

            if (cartResponse.IsSuccessStatusCode)
            {
                cartViewModel.PageList = await cartResponse.Content.ReadAsJsonAsync<PageList<CartDto>>();
            }
            else {
                return RedirectToAction("Login", "Account");

            }

            return View(cartViewModel);
             
        }




        /// <summary>
        /// 收藏列表信息
        /// </summary>
        /// <param name="index">页索引</param>
        /// <param name="size">显示个数</param>
        /// <returns></returns>
        public async Task<IActionResult> WishList(int index=1,int size=5)
        {
            WishViewModel wishViewModel = new WishViewModel();
            var response = await httpClient.GetAsync("/api/cates/0");

            if (response.IsSuccessStatusCode)
            {
                wishViewModel.Product_CategoryDtos = await response.Content.ReadAsJsonAsync<List<Product_CategoryDto>>();
            }
            var token = Request.Cookies["token"];
      
            if (token== "null")
            {           
                return RedirectToAction("Login","Account");
            }
            httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer",token);
            var wishResponse = await httpClient.GetAsync($"/api/wishs?index={index}&size={size}");

            if (wishResponse.IsSuccessStatusCode)
            {
                wishViewModel.PageList = await wishResponse.Content.ReadAsJsonAsync<PageList<WishDto>>();
            }

            else
            {
                return RedirectToAction("Login", "Account");

            }
            return View(wishViewModel);

        }
    }
}