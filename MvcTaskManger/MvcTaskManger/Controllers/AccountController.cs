using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MvcTaskManger.Identity;
using MvcTaskManger.Models;
using MvcTaskManger.ServiceContracts;
using MvcTaskManger.ViewModels;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcTaskManger.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        // Feilds
        private IUsersService _usersService;
        private ApplicationDbContext _dbContext;
        private readonly UserManager<ApplicationUser> _userManager;

        // Constructors
        public AccountController(IUsersService usersService, 
            ApplicationDbContext dbContext,
            UserManager<ApplicationUser> userManager)
        {
            _usersService = usersService;
            _dbContext = dbContext;
            _userManager = userManager;
        }

        // Methods
        // POST: api/Account/authenticate
        [HttpPost("authenticate")]
        public async Task<ActionResult<ApplicationUser>> Authenticate([FromBody] LoginViewModel loginViewModel)
        {
           var user = await _usersService.Authenticated(loginViewModel);

            if (user != null)
            {
                return Ok(user);
            }
            else
            {
                return Unauthorized();
            }
        }

        // Methods
        // POST: api/Account/register
        [HttpPost("register")]
        public async Task<ActionResult<ApplicationUser>> Register([FromBody] SignUpViewModel signUpViewModel)
        {
            var user = await _usersService.Register(signUpViewModel);

            if (user != null)
            {
                return Ok(user);
            }
            else
            {
                return BadRequest( new {message = "Invalid Data"});
            }
        }

        // POST: api/Account/getUserByEmail/email@example.com
        [HttpGet("getUserByEmail/{email}")]
        public async Task<ApplicationUser> GetUserByEmail(string email)
        {
            ApplicationUser user = await _usersService.GetUserByEmail(email);
            return user;
        }

        // GET: api/Account
        [HttpGet()]
        public async Task<ActionResult<IEnumerable<CountryViewModel>>> GetAllCountries()
        {
            List<CountryViewModel> countriesViewModel = (await _dbContext.Countries.OrderBy(temp => temp.CountryName).ToListAsync())
                .Select(country => country.ConvertCountryToCountryViewModel()).ToList();
            return countriesViewModel;
        }

        // GET: api/Account/getallemployees
        [HttpGet("getallemployees")]
        [Authorize]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetAllEmployees()
        {
            List<ApplicationUser> users = _dbContext.Users.ToList();
            List<ApplicationUser> employeeUsers = new List<ApplicationUser>();

            foreach (var item in users)
            {
                if ((await _userManager.IsInRoleAsync(item, "Employee")))
                {
                    employeeUsers.Add(item);
                }
            }
            return employeeUsers;
        }
    }
}
