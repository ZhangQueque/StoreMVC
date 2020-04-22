using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using QuequeTheme.Models;

namespace QuequeTheme.Controllers
{
    public class AccountController : Controller
    {

        private readonly ILogger<HomeController> _logger;
        private readonly HttpClient httpClient;
        public AccountController(ILogger<HomeController> logger, IHttpClientFactory httpClientFactory)
        {
            _logger = logger;
            httpClient = httpClientFactory.CreateClient("api1");
        }
        public async Task< IActionResult> Login()
        {
            IndexViewModel indexViewModel = new IndexViewModel();
            var response = await httpClient.GetAsync("/api/cates/0");

            if (response.IsSuccessStatusCode)
            {
                indexViewModel.Product_CategoryDtos = await response.Content.ReadAsJsonAsync<List<Product_CategoryDto>>();
            }
            return View(indexViewModel);
        }
    }
}