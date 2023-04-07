using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DemoController : ControllerBase
    {

        [HttpGet("EmployeeList")]
        public ActionResult List() {
            return Ok();        
        }
    }
}
