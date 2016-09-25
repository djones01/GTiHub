using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace GTiHub.API.File_Handling
{
    [Route("api/[controller]")]
    public class FileController : Controller
    {
        [HttpPost]
        public async Task<IActionResult> ExtractHeaders(ICollection<IFormFile> files)
        {
          
            return NoContent();
        }
    }
}
