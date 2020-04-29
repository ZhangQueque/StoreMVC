using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using AspNetCore.Http.Extensions;
using QuequeTheme.Models;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace QuequeTheme.Controllers
{
    public class AdminController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly HttpClient httpClient;
        public AdminController(ILogger<HomeController> logger, IHttpClientFactory httpClientFactory)
        {
            _logger = logger;
            httpClient = httpClientFactory.CreateClient("api1");
        }

        /// <summary>
        /// 首页  仪表盘
        /// </summary>
        /// <returns></returns>
        public async Task<IActionResult> Index()
        {
            ViewBag.Active = "Index";
            AdminViewModel adminViewModel = new AdminViewModel();
            var token = Request.Cookies["token"];
            if (token == null)
            {
                return RedirectToAction("Login", "Account");
            }

            if (token == "null")
            {
                return RedirectToAction("Login", "Account");
            }

            httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var userReponse = await httpClient.GetAsync("/api/admin/user");

            if (userReponse.IsSuccessStatusCode)
            {
                adminViewModel.UserDto = await userReponse.Content.ReadAsJsonAsync<UserDto>();
            }

            var logReponse = await httpClient.GetAsync("/api/admin/logmsg");

            if (logReponse.IsSuccessStatusCode)
            {
                adminViewModel.LogMessages = await logReponse.Content.ReadAsJsonAsync<List<LogMessage>>();
            }


            var numberReponse = await httpClient.GetAsync("/api/admin/number");

            if (numberReponse.IsSuccessStatusCode)
            {
                adminViewModel.CommonDatas = await numberReponse.Content.ReadAsJsonAsync<List<CommonData>>();
            }

            return View(adminViewModel);
        }

        #region 用户操作
        /// <summary>
        /// 用户信息
        /// </summary>
        /// <returns></returns>
        public async Task<IActionResult> UserInfo()
        {
            ViewBag.Active = "User";
            AdminViewModel adminViewModel = new AdminViewModel();
            var token = Request.Cookies["token"];

            if (token == "null")
            {
                return RedirectToAction("Login", "Account");
            }
            if (token == null)
            {
                return RedirectToAction("Login", "Account");
            }
            httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var userReponse = await httpClient.GetAsync("/api/admin/user");

            if (userReponse.IsSuccessStatusCode)
            {
                adminViewModel.UserDto = await userReponse.Content.ReadAsJsonAsync<UserDto>();
            }

            var logReponse = await httpClient.GetAsync("/api/admin/logmsg");

            if (logReponse.IsSuccessStatusCode)
            {
                adminViewModel.LogMessages = await logReponse.Content.ReadAsJsonAsync<List<LogMessage>>();
            }
            return View(adminViewModel);
        }


        /// <summary>
        /// 用户安全
        /// </summary>
        /// <returns></returns>
        public async Task<IActionResult> UserSecurity()
        {
            ViewBag.Active = "User";
            AdminViewModel adminViewModel = new AdminViewModel();
            var token = Request.Cookies["token"];

            if (token == "null")
            {
                return RedirectToAction("Login", "Account");
            }
            if (token == null)
            {
                return RedirectToAction("Login", "Account");
            }
            httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var userReponse = await httpClient.GetAsync("/api/admin/user");

            if (userReponse.IsSuccessStatusCode)
            {
                adminViewModel.UserDto = await userReponse.Content.ReadAsJsonAsync<UserDto>();
            }

            var logReponse = await httpClient.GetAsync("/api/admin/logmsg");

            if (logReponse.IsSuccessStatusCode)
            {
                adminViewModel.LogMessages = await logReponse.Content.ReadAsJsonAsync<List<LogMessage>>();
            }
            return View(adminViewModel);
        }

        /// <summary>
        /// 用户订单
        /// </summary>
        /// <returns></returns>
        public async Task<IActionResult> UserOrders(int index = 1, int size = 5,int cardId=2)
        {
            ViewBag.Index = index;
            ViewBag.CardId = cardId;
            ViewBag.Active = "User";
            AdminViewModel adminViewModel = new AdminViewModel();
            var token = Request.Cookies["token"];

            if (token == "null")
            {
                return RedirectToAction("Login", "Account");
            }
            if (token == null)
            {
                return RedirectToAction("Login", "Account");
            }
            httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var userReponse = await httpClient.GetAsync("/api/admin/user");

            if (userReponse.IsSuccessStatusCode)
            {
                adminViewModel.UserDto = await userReponse.Content.ReadAsJsonAsync<UserDto>();
            }

            var logReponse = await httpClient.GetAsync("/api/admin/logmsg");

            if (logReponse.IsSuccessStatusCode)
            {
                adminViewModel.LogMessages = await logReponse.Content.ReadAsJsonAsync<List<LogMessage>>();
            }

            List<OrderDto> orderDtos = new List<OrderDto>();


            var orderReponse = await httpClient.GetAsync("/api/orders");

            if (orderReponse.IsSuccessStatusCode)
            {
                orderDtos = await orderReponse.Content.ReadAsJsonAsync<List<OrderDto>>();
                adminViewModel.PageListStatus = await PageList<OrderDto>.CreateLayuiList(orderDtos.OrderByDescending(m=>m.CreateTime).AsQueryable(), index, size);
                adminViewModel.PageListStatus0 = await PageList<OrderDto>.CreateLayuiList(orderDtos.OrderByDescending(m => m.CreateTime).Where(m => m.Status == 0).AsQueryable(), index, size);

                adminViewModel.PageListStatus1 = await PageList<OrderDto>.CreateLayuiList(orderDtos.OrderByDescending(m => m.CreateTime).Where(m => m.Status == 1).AsQueryable(), index, size);

                adminViewModel.PageListStatus2 = await PageList<OrderDto>.CreateLayuiList(orderDtos.OrderByDescending(m => m.CreateTime).Where(m => m.Status == 2).AsQueryable(), index, size);
                adminViewModel.PageListStatus3 = await PageList<OrderDto>.CreateLayuiList(orderDtos.OrderByDescending(m => m.CreateTime).Where(m => m.Status == 3).AsQueryable(), index, size);

                adminViewModel.PageListStatus5 = await PageList<OrderDto>.CreateLayuiList(orderDtos.OrderByDescending(m => m.CreateTime).Where(m => m.Status == 5).AsQueryable(), index, size);

            }
            return View(adminViewModel);
        }
        #endregion


        /// <summary>
        /// 用户管理
        /// </summary>
        /// <returns></returns>
        public async Task<IActionResult> UserMagger()
        {
            ViewBag.Active = "UserMagger";
            AdminViewModel adminViewModel = new AdminViewModel();
            var token = Request.Cookies["token"];

            if (token == "null")
            {
                return RedirectToAction("Login", "Account");
            }

            httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var userReponse = await httpClient.GetAsync("/api/admin/user");

            if (userReponse.IsSuccessStatusCode)
            {
                adminViewModel.UserDto = await userReponse.Content.ReadAsJsonAsync<UserDto>();
            }

            var logReponse = await httpClient.GetAsync("/api/admin/logmsg");

            if (logReponse.IsSuccessStatusCode)
            {
                adminViewModel.LogMessages = await logReponse.Content.ReadAsJsonAsync<List<LogMessage>>();
            }



            return View(adminViewModel);
        }

        #region 商品操作

        /// <summary>
        /// 商品上架
        /// </summary>
        /// <returns></returns>
        public async Task<IActionResult> ProductCreate()
        {
            ViewBag.Active = "Product";
            AdminViewModel adminViewModel = new AdminViewModel();
            var token = Request.Cookies["token"];

            if (token == "null")
            {
                return RedirectToAction("Login", "Account");
            }

            httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var userReponse = await httpClient.GetAsync("/api/admin/user");

            if (userReponse.IsSuccessStatusCode)
            {
                adminViewModel.UserDto = await userReponse.Content.ReadAsJsonAsync<UserDto>();
            }

            var logReponse = await httpClient.GetAsync("/api/admin/logmsg");

            if (logReponse.IsSuccessStatusCode)
            {
                adminViewModel.LogMessages = await logReponse.Content.ReadAsJsonAsync<List<LogMessage>>();
            }
            return View(adminViewModel);
        }

        /// <summary>
        /// 商品图片
        /// </summary>
        /// <returns></returns>
        public async Task<IActionResult> ProductImage()
        {
            ViewBag.Active = "Product";
            AdminViewModel adminViewModel = new AdminViewModel();
            var token = Request.Cookies["token"];

            if (token == "null")
            {
                return RedirectToAction("Login", "Account");
            }

            httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var userReponse = await httpClient.GetAsync("/api/admin/user");

            if (userReponse.IsSuccessStatusCode)
            {
                adminViewModel.UserDto = await userReponse.Content.ReadAsJsonAsync<UserDto>();
            }

            var logReponse = await httpClient.GetAsync("/api/admin/logmsg");

            if (logReponse.IsSuccessStatusCode)
            {
                adminViewModel.LogMessages = await logReponse.Content.ReadAsJsonAsync<List<LogMessage>>();
            }
            return View(adminViewModel);
        }



        /// <summary>
        /// 商品详情
        /// </summary>
        /// <returns></returns>
        public async Task<IActionResult> ProductBlog()
        {
            ViewBag.Active = "Product";
            AdminViewModel adminViewModel = new AdminViewModel();
            var token = Request.Cookies["token"];

            if (token == "null")
            {
                return RedirectToAction("Login", "Account");
            }

            httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var userReponse = await httpClient.GetAsync("/api/admin/user");

            if (userReponse.IsSuccessStatusCode)
            {
                adminViewModel.UserDto = await userReponse.Content.ReadAsJsonAsync<UserDto>();
            }

            var logReponse = await httpClient.GetAsync("/api/admin/logmsg");

            if (logReponse.IsSuccessStatusCode)
            {
                adminViewModel.LogMessages = await logReponse.Content.ReadAsJsonAsync<List<LogMessage>>();
            }
            return View(adminViewModel);
        }

        /// <summary>
        /// 所有商品管理
        /// </summary>
        /// <returns></returns>
        public async Task<IActionResult> ProductMagger()
        {
            ViewBag.Active = "Product";
            AdminViewModel adminViewModel = new AdminViewModel();
            var token = Request.Cookies["token"];

            if (token == "null")
            {
                return RedirectToAction("Login", "Account");
            }

            httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var userReponse = await httpClient.GetAsync("/api/admin/user");

            if (userReponse.IsSuccessStatusCode)
            {
                adminViewModel.UserDto = await userReponse.Content.ReadAsJsonAsync<UserDto>();
            }

            var logReponse = await httpClient.GetAsync("/api/admin/logmsg");

            if (logReponse.IsSuccessStatusCode)
            {
                adminViewModel.LogMessages = await logReponse.Content.ReadAsJsonAsync<List<LogMessage>>();
            }
            return View(adminViewModel);
        }
        #endregion






        #region 订单操作
        /// <summary>
        /// 待发货订单
        /// </summary>
        /// <returns></returns>
        public async Task<IActionResult> OrderShipments(int index = 1, int size = 5)
        {
            ViewBag.Index = index;
            ViewBag.Active = "Order";
            AdminViewModel adminViewModel = new AdminViewModel();
            var token = Request.Cookies["token"];

            if (token == "null")
            {
                return RedirectToAction("Login", "Account");
            }

            httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var userReponse = await httpClient.GetAsync("/api/admin/user");

            if (userReponse.IsSuccessStatusCode)
            {
                adminViewModel.UserDto = await userReponse.Content.ReadAsJsonAsync<UserDto>();
            }

            var logReponse = await httpClient.GetAsync("/api/admin/logmsg");

            if (logReponse.IsSuccessStatusCode)
            {
                adminViewModel.LogMessages = await logReponse.Content.ReadAsJsonAsync<List<LogMessage>>();
            }

            List<OrderDto> orderDtos = new List<OrderDto>();


            var orderReponse = await httpClient.GetAsync("/api/orders/all");

            if (orderReponse.IsSuccessStatusCode)
            {
                orderDtos = await orderReponse.Content.ReadAsJsonAsync<List<OrderDto>>();             
                adminViewModel.PageListStatus1 = await PageList<OrderDto>.CreateLayuiList(orderDtos.OrderByDescending(m => m.CreateTime).Where(m => m.Status == 1).AsQueryable(), index, size);
            }



            return View(adminViewModel);
        }

        /// <summary>
        /// 已收货订单
        /// </summary>
        /// <returns></returns>
        public async Task<IActionResult> OrderReceiving(int index = 1, int size = 5)
        {
            ViewBag.Index = index;
            ViewBag.Active = "Order";
            AdminViewModel adminViewModel = new AdminViewModel();
            var token = Request.Cookies["token"];

            if (token == "null")
            {
                return RedirectToAction("Login", "Account");
            }

            httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var userReponse = await httpClient.GetAsync("/api/admin/user");

            if (userReponse.IsSuccessStatusCode)
            {
                adminViewModel.UserDto = await userReponse.Content.ReadAsJsonAsync<UserDto>();
            }

            var logReponse = await httpClient.GetAsync("/api/admin/logmsg");

            if (logReponse.IsSuccessStatusCode)
            {
                adminViewModel.LogMessages = await logReponse.Content.ReadAsJsonAsync<List<LogMessage>>();
            }

            List<OrderDto> orderDtos = new List<OrderDto>();


            var orderReponse = await httpClient.GetAsync("/api/orders/all");

            if (orderReponse.IsSuccessStatusCode)
            {
                orderDtos = await orderReponse.Content.ReadAsJsonAsync<List<OrderDto>>();
                adminViewModel.PageListStatus3 = await PageList<OrderDto>.CreateLayuiList(orderDtos.OrderByDescending(m => m.CreateTime).Where(m => m.Status == 3).AsQueryable(), index, size);
            }


            return View(adminViewModel);
        }

        /// <summary>
        /// 待退款订单
        /// </summary>
        /// <returns></returns>
        public async Task<IActionResult> OrderRefund(int index = 1, int size = 5)
        {
            ViewBag.Index = index;

            ViewBag.Active = "Order";
            AdminViewModel adminViewModel = new AdminViewModel();
            var token = Request.Cookies["token"];

            if (token == "null")
            {
                return RedirectToAction("Login", "Account");
            }

            httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var userReponse = await httpClient.GetAsync("/api/admin/user");

            if (userReponse.IsSuccessStatusCode)
            {
                adminViewModel.UserDto = await userReponse.Content.ReadAsJsonAsync<UserDto>();
            }

            var logReponse = await httpClient.GetAsync("/api/admin/logmsg");

            if (logReponse.IsSuccessStatusCode)
            {
                adminViewModel.LogMessages = await logReponse.Content.ReadAsJsonAsync<List<LogMessage>>();
            }
            List<OrderDto> orderDtos = new List<OrderDto>();


            var orderReponse = await httpClient.GetAsync("/api/orders/all");

            if (orderReponse.IsSuccessStatusCode)
            {
                orderDtos = await orderReponse.Content.ReadAsJsonAsync<List<OrderDto>>();
                adminViewModel.PageListStatus5 = await PageList<OrderDto>.CreateLayuiList(orderDtos.OrderByDescending(m => m.CreateTime).Where(m => m.Status == 5).AsQueryable(), index, size);
            }

            return View(adminViewModel);
        }

        /// <summary>
        /// 全部订单
        /// </summary>
        /// <returns></returns>
        public async Task<IActionResult> OrderAll(int index = 1, int size = 5)
        {
            ViewBag.Index = index;

            ViewBag.Active = "Order";
            AdminViewModel adminViewModel = new AdminViewModel();
            var token = Request.Cookies["token"];

            if (token == "null")
            {
                return RedirectToAction("Login", "Account");
            }

            httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var userReponse = await httpClient.GetAsync("/api/admin/user");

            if (userReponse.IsSuccessStatusCode)
            {
                adminViewModel.UserDto = await userReponse.Content.ReadAsJsonAsync<UserDto>();
            }

            var logReponse = await httpClient.GetAsync("/api/admin/logmsg");

            if (logReponse.IsSuccessStatusCode)
            {
                adminViewModel.LogMessages = await logReponse.Content.ReadAsJsonAsync<List<LogMessage>>();
            }

            var orderReponse = await httpClient.GetAsync("/api/orders/all");
            List<OrderDto> orderDtos = new List<OrderDto>();

            if (orderReponse.IsSuccessStatusCode)
            {
                orderDtos = await orderReponse.Content.ReadAsJsonAsync<List<OrderDto>>();
                adminViewModel.PageListStatus = await PageList<OrderDto>.CreateLayuiList(orderDtos.OrderByDescending(m => m.CreateTime).AsQueryable(), index, size);
            }
            return View(adminViewModel);
        }

        #endregion






    }
}