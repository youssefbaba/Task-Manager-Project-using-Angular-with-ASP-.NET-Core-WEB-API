using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MvcTaskManger.Identity;
using MvcTaskManger.Models;
using MvcTaskManger.ViewModels;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace MvcTaskManger.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]  // For JWT Authentication
    public class ClientLocationsController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public ClientLocationsController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        // GET: api/ClientLocations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClientLocationViewModel>>> GetAllClientLocations()
        {
            List<ClientLocationViewModel> clientLocationViewModels = (await _dbContext.ClientLocations.OrderBy(temp => temp.ClientLocationName).ToListAsync())
                .Select(clientLocation => clientLocation.ConvertClientLocationToClientLocationViewModel()).ToList();
            return clientLocationViewModels;
        }

        // GET: api/ClientLocations/5
        [HttpGet("{clientLocationID}")]
        public async Task<ActionResult<ClientLocationViewModel>> GetClientLocationByClientLocationID([FromRoute] int clientLocationID)
        {
            var clientLocation = await _dbContext.ClientLocations.FirstOrDefaultAsync(temp => temp.ClientLocationID == clientLocationID);

            if (clientLocation == null)
            {
                return null;
            }
            return Ok(clientLocation.ConvertClientLocationToClientLocationViewModel());
        }

        // POST: api/ClientLocations
        [HttpPost]
        public async Task<ActionResult<ClientLocationViewModel>> InsertClientLocation([FromBody][Bind(nameof(ClientLocationViewModel.ClientLocationName))] ClientLocationViewModel clientLocationViewModel)
        {
            var newClientLocation = clientLocationViewModel.ConvertClientLocationViewModelToClientLocation();

            await _dbContext.ClientLocations.AddAsync(newClientLocation);
            await _dbContext.SaveChangesAsync();

            var existingClientLocationViewModel = newClientLocation.ConvertClientLocationToClientLocationViewModel();

            return CreatedAtAction("GetClientLocationByClientLocationID", new { clientLocationID = existingClientLocationViewModel.ClientLocationID }, existingClientLocationViewModel);
        }

        // PUT: api/ClientLocations/5
        [HttpPut("{clientLocationID}")]
        public async Task<IActionResult> UpdateClientLocation([FromRoute] int clientLocationID, [FromBody] ClientLocationViewModel clientLocationViewModel)
        {

            if (clientLocationID != clientLocationViewModel.ClientLocationID)
            {
                return BadRequest(); //Response.StatusCode = StatusCodes.Status400BadRequest
            }

            var existingClientLocation = await _dbContext.ClientLocations.FirstOrDefaultAsync(temp => temp.ClientLocationID == clientLocationID);

            if (existingClientLocation == null)
            {
                if (!_dbContext.ClientLocations.Any())
                {
                    return BadRequest();
                }
                return NotFound();
            }

            existingClientLocation.ClientLocationName = clientLocationViewModel.ClientLocationName;
            await _dbContext.SaveChangesAsync();

            var existingClientLocationTwo = await _dbContext.ClientLocations.FirstOrDefaultAsync(temp => temp.ClientLocationID == clientLocationViewModel.ClientLocationID);

            return Ok(existingClientLocationTwo.ConvertClientLocationToClientLocationViewModel());
        }


        // DELETE: api/ClientLocations/5
        [HttpDelete("{clientLocationID}")]
        public async Task<IActionResult> DeleteClientLocation([FromRoute] int clientLocationID)
        {
            var clientLocation = await _dbContext.ClientLocations.FirstOrDefaultAsync(temp => temp.ClientLocationID == clientLocationID);

            if (clientLocation == null)
            {
                if (!_dbContext.ClientLocations.Any())
                {
                    return NotFound();
                }
                else
                {
                    return BadRequest();
                }
            }

            _dbContext.ClientLocations.Remove(clientLocation);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
