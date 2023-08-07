using Microsoft.AspNetCore.Mvc;

namespace MvcTaskManger.Controllers
{
    [Route("[controller]")]
    public class HomeController : Controller
    {
        [Route("/")]
        [Route("[action]")]
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
    }
}
