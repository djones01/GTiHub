using Microsoft.AspNetCore.Mvc;

namespace GTiHub.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
