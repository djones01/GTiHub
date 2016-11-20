namespace GTiHub.Controllers
{
    #region

    using Microsoft.AspNetCore.Mvc;

    #endregion

    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return this.View();
        }

        public IActionResult Source()
        {
            return this.View("Sources");
        }
    }
}