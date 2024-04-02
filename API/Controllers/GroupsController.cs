using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class GroupsController : ControllerBase
    {

        [HttpGet]
        public IActionResult Groups()
        {
            return Ok(new List<string> { "group1", "group2", "group3" });
        }
    }
}
