using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using QuequeTheme.Models;
using AspNetCore.Http.Extensions;
namespace QuequeTheme.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly HttpClient httpClient;
        public HomeController(ILogger<HomeController> logger,IHttpClientFactory httpClientFactory)
        {
            _logger = logger;
            httpClient= httpClientFactory.CreateClient("api1");
        }

        public async Task<IActionResult> Index()
        {
            IndexViewModel indexViewModel = new IndexViewModel();
            var response=await  httpClient.GetAsync("/api/cates/0");
             
            if (response.IsSuccessStatusCode)
            {
                indexViewModel.Product_CategoryDtos = await response.Content.ReadAsJsonAsync<List<Product_CategoryDto>>();
            }

            //最新商品
            var responseNew = await httpClient.GetAsync("/api/0/products/new");

            if (responseNew.IsSuccessStatusCode)
            {
                indexViewModel.NewProducts = await responseNew.Content.ReadAsJsonAsync<List<Product>>();
            }

            //销量最高
            var responseShopTop = await httpClient.GetAsync("/api/0}/products/shoptop");

            if (responseShopTop.IsSuccessStatusCode)
            {
                indexViewModel.ShopTopProducts = await responseShopTop.Content.ReadAsJsonAsync<List<Product>>();
            }

            //推荐
            var responsePageView = await httpClient.GetAsync("/api/0/products/viewtop");

            if (responsePageView.IsSuccessStatusCode)
            {
                indexViewModel.PageViewTopProducts = await responsePageView.Content.ReadAsJsonAsync<List<Product>>();
            }

            return View(indexViewModel);
        }

        public async Task<IActionResult> Detail(int productId)
        {
            ViewBag.ProductId = productId;
            DetailViewModel detailViewModel = new DetailViewModel();
            var response = await httpClient.GetAsync("/api/cates/0");

            if (response.IsSuccessStatusCode)
            {
                detailViewModel.Product_CategoryDtos = await response.Content.ReadAsJsonAsync<List<Product_CategoryDto>>();
            }

            //最新商品
            var responseNew = await httpClient.GetAsync("/api/0/products/new");

            if (responseNew.IsSuccessStatusCode)
            {
                detailViewModel.NewProducts = await responseNew.Content.ReadAsJsonAsync<List<Product>>();
            }

            var responseProduct = await httpClient.GetAsync($"/api/0/products/{productId}");

            if (responseProduct.IsSuccessStatusCode)
            {
                detailViewModel.Product = await responseProduct.Content.ReadAsJsonAsync<Product>();
            }
            else
            {
                detailViewModel.Product = new Product();
            }

            return View(detailViewModel);
        }


        public async Task< IActionResult> List(int typeId,string typeName,string childTypeName,string seachName, [FromQuery]PageParameters pageParameters)
        {
            //界面传值
            ViewBag.TypeId = typeId; 
            ViewBag.TypeName = typeName;
            ViewBag.ChildTypeName = "";
            ViewBag.Index = pageParameters.PageIndex;


            if (!string.IsNullOrEmpty(childTypeName))
            {
                ViewBag.ChildTypeName =  childTypeName;
            }
           
            if (!string.IsNullOrEmpty(pageParameters.Name))
            {
                ViewBag.ChildTypeName = $"' {pageParameters.Name} '的搜索结果为：";
            }

            //true  false  逻辑处理
            ViewBag.IsPriceSort = false;
            ViewBag.IsPriceSortNull = pageParameters.IsPriceSort;
            if (pageParameters.IsPriceSort!=null)
            {
                ViewBag.IsPriceSort = !pageParameters.IsPriceSort;
             }
            ViewBag.IsPurchaseSort = false;
            ViewBag.IsPurchaseSortNull = pageParameters.IsPurchaseSort;

            if (pageParameters.IsPurchaseSort != null)
            {
                ViewBag.IsPurchaseSort = !pageParameters.IsPurchaseSort;
            }
            ViewBag.IsTimeSort = false;
            ViewBag.IsTimeSortNull = pageParameters.IsTimeSort;
            if (pageParameters.IsTimeSort != null)
            {
                ViewBag.IsTimeSort = !pageParameters.IsTimeSort;
            }

            //查询 逻辑处理
            if (!string.IsNullOrEmpty(seachName))
            {
                pageParameters.Name = seachName;
            }         
            ViewBag.Name = pageParameters.Name;
            ListViewModel listViewModel = new ListViewModel();
            var response = await httpClient.GetAsync($"/api/{typeId}/products?PageIndex={pageParameters.PageIndex}" +
                $"&PageSize={pageParameters.PageSize}" +
                $"&Name={pageParameters.Name}" +
                $"&BottomPrice={pageParameters.BottomPrice}" +
                $"&TopPrice={pageParameters.TopPrice}" +
                $"&IsPriceSort={pageParameters.IsPriceSort}" +
                $"&IsPurchaseSort={pageParameters.IsPurchaseSort}" +
                $"&IsTimeSort={pageParameters.IsTimeSort}");
            if (response.IsSuccessStatusCode)
            {
                listViewModel.PageList = await response.Content.ReadAsJsonAsync<PageList<Product>>();
            }

            var responseCate = await httpClient.GetAsync($"/api/cates/{0}");
            
            if (responseCate.IsSuccessStatusCode)
            {
                listViewModel.Product_CategoryDtos = await responseCate.Content.ReadAsJsonAsync< List < Product_CategoryDto >> ();
            }

            return View(listViewModel);
        }



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
