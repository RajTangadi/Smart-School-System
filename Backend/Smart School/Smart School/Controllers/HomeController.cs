using Microsoft.AspNetCore.Mvc;

namespace Smart_School.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
