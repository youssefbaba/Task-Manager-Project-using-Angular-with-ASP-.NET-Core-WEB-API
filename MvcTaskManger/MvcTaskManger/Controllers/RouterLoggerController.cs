using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Text;

namespace MvcTaskManger.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RouterLoggerController : ControllerBase
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public RouterLoggerController(IHostingEnvironment hostingEnvironment)
        {
           _hostingEnvironment = hostingEnvironment;
        }

        [HttpPost]
        public IActionResult Log()
        {
            string logMessage = null; 
            using (StreamReader streamReader = new StreamReader(Request.Body, Encoding.ASCII))
            {
                logMessage = streamReader.ReadToEnd() + "\n";
            }
            string filePath = _hostingEnvironment.ContentRootPath + "\\log.txt";
            System.IO.File.AppendAllText(filePath, logMessage);
            return Ok();
        }

    }
}
