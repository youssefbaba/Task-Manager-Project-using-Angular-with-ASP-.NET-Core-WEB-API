using Microsoft.AspNetCore.Mvc;
using MvcTaskManger.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;
using MvcTaskManger.Identity;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using MvcTaskManger.Models;
using Microsoft.AspNetCore.Authorization;

namespace MvcTaskManger.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CountriesController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public CountriesController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/Countries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CountryViewModel>>> GetAllCountries()
        {
            List<CountryViewModel> countriesViewModel = (await _dbContext.Countries.OrderBy(temp => temp.CountryName).ToListAsync())
                .Select(country => country.ConvertCountryToCountryViewModel()).ToList();
            return countriesViewModel;
        }

        // GET: api/Countries/5
        [HttpGet("{countryID}")]
        public async Task<ActionResult<CountryViewModel>> GetCountryByCountryID([FromRoute] int countryID)
        {
            var country = await _dbContext.Countries.FirstOrDefaultAsync(temp => temp.CountryID == countryID);

            if (country == null)
            {
                return null;
            }
            return Ok(country.ConvertCountryToCountryViewModel());
        }

        // POST: api/Countries
        [HttpPost]
        public async Task<ActionResult<CountryViewModel>> InsertCountry([FromBody][Bind(nameof(CountryViewModel.CountryName))] CountryViewModel countryViewModel)
        {
            var newCountry = countryViewModel.ConvertCountryViewModelToCountry();

            await _dbContext.Countries.AddAsync(newCountry);
            await _dbContext.SaveChangesAsync();

            var existingCountryViewModel = newCountry.ConvertCountryToCountryViewModel();

            return CreatedAtAction("GetCountryByCountryID", new { countryID = existingCountryViewModel.CountryID }, existingCountryViewModel);
        }

        // PUT: api/Countries/5
        [HttpPut("{countryID}")]
        public async Task<IActionResult> UpdateCountry([FromRoute] int countryID, [FromBody] CountryViewModel countryViewModel)
        {

            if (countryID != countryViewModel.CountryID)
            {
                return BadRequest(); //Response.StatusCode = StatusCodes.Status400BadRequest
            }

            var existingCountry = await _dbContext.Countries.FirstOrDefaultAsync(temp => temp.CountryID == countryID);

            if (existingCountry == null)
            {
                if (!_dbContext.Countries.Any())
                {
                    return BadRequest();
                }
                return NotFound();
            }

            existingCountry.CountryName = countryViewModel.CountryName;
            await _dbContext.SaveChangesAsync();

            var existingCountryTwo = await _dbContext.Countries.FirstOrDefaultAsync(temp => temp.CountryID == countryViewModel.CountryID);

            return Ok(existingCountryTwo.ConvertCountryToCountryViewModel());
        }

        // DELETE: api/Countries/5
        [HttpDelete("{countryID}")]
        public async Task<IActionResult> DeleteCountry([FromRoute] int countryID)
        {
            var country = await _dbContext.Countries.FirstOrDefaultAsync(temp => temp.CountryID == countryID);

            if (country == null)
            {
                if (!_dbContext.Countries.Any())
                {
                    return NotFound();
                }
                else
                {
                    return BadRequest();
                }
            }

            _dbContext.Countries.Remove(country);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }

    }
}
