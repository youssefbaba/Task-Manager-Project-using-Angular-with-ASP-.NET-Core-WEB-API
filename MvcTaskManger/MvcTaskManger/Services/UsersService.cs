using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MvcTaskManger.Identity;
using MvcTaskManger.Models;
using MvcTaskManger.ServiceContracts;
using MvcTaskManger.ViewModels;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace MvcTaskManger.Services
{
    public class UsersService : IUsersService
    {
        // Fields
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly AppSettings _appSettings;
        private readonly ApplicationDbContext _dbContext;

        // Constructor
        public UsersService(UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IOptions<AppSettings> appSettings,
            ApplicationDbContext dbContext)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _appSettings = appSettings.Value;
            _dbContext = dbContext;
        }

        // Methods
        public async Task<ApplicationUser> Authenticated(LoginViewModel loginViewModel)
        {
            var result = await _signInManager.PasswordSignInAsync(loginViewModel.Email, loginViewModel.Password, false, lockoutOnFailure: false);

            if (result.Succeeded)
            {
                var applicationUser = await _userManager.FindByEmailAsync(loginViewModel.Email);

                if (await _userManager.IsInRoleAsync(applicationUser, "Admin"))
                {
                    applicationUser.Role = "Admin";
                }
                else if (await _userManager.IsInRoleAsync(applicationUser, "Employee"))
                {
                    applicationUser.Role = "Employee";
                }

                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
                var tokenDescriptor = new SecurityTokenDescriptor()
                {
                    Subject = new ClaimsIdentity(new Claim[] {
                        new Claim(ClaimTypes.Name, applicationUser.Id),
                        new Claim(ClaimTypes.Email, applicationUser.Email),
                        new Claim(ClaimTypes.Role, applicationUser.Role)
                    }),
                    Expires = DateTime.UtcNow.AddHours(8),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };
                SecurityToken token;
                try
                {
                    token = tokenHandler.CreateToken(tokenDescriptor);
                }
                catch (Exception e)
                {
                    throw e;
                }

                applicationUser.Token = tokenHandler.WriteToken(token);

                return applicationUser;
            }
            else
            {
                return null;
            }
        }

        public async Task<ApplicationUser> GetUserByEmail(string email)
        {
            return await _userManager.FindByEmailAsync(email);     
        }

        public async Task<ApplicationUser> Register(SignUpViewModel signUpViewModel)
        {
            // Store user registration details into Indentity database
            ApplicationUser user = new ApplicationUser();

            // Id will be generated automatically
            user.FirstName = signUpViewModel.PersonName.FirstName;
            user.LastName = signUpViewModel.PersonName.LastName;
            user.UserName = signUpViewModel.Email;
            user.Email = signUpViewModel.Email;
            user.PhoneNumber = signUpViewModel.Mobile;
            user.DateOfBirth = Convert.ToDateTime(signUpViewModel.DateOfBirth);
            user.Gender = signUpViewModel.Gender;
            user.ReceiveNewsLetters = signUpViewModel.ReceiveNewLetters;
            user.CountryID = signUpViewModel.CountryID;
            user.Role = "Employee";


            // Sign Up
            IdentityResult result = await _userManager.CreateAsync(user, signUpViewModel.Password);

            if (result.Succeeded)  // If Sign Up of new user Succeeded
            {
                // Add the new user into 'Employee' role
                if ((await _userManager.AddToRoleAsync(await _userManager.FindByEmailAsync(signUpViewModel.Email), "Employee")).Succeeded)
                {
                    // Sign in 
                    var result2 = await _signInManager.PasswordSignInAsync(signUpViewModel.Email, signUpViewModel.Password, false, false);

                    if (result2.Succeeded)
                    {
                        // Generate token

                        var tokenHandler = new JwtSecurityTokenHandler();
                        var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
                        var tokenDescriptor = new SecurityTokenDescriptor()
                        {
                            Subject = new ClaimsIdentity(new Claim[] {
                        new Claim(ClaimTypes.Name, user.Id),
                        new Claim(ClaimTypes.Email, user.Email),
                        new Claim(ClaimTypes.Role, user.Role)
                    }),
                            Expires = DateTime.UtcNow.AddHours(8),
                            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                        };
                        SecurityToken token;
                        try
                        {
                            token = tokenHandler.CreateToken(tokenDescriptor);
                        }
                        catch (Exception e)
                        {
                            throw e;
                        }
                        user.Token = tokenHandler.WriteToken(token);

                        // Skills
                        foreach (Skill addedSkill in signUpViewModel.Skills)
                        {
                            Skill skill = new Skill()
                            {
                                SkillName = addedSkill.SkillName,
                                ExpertiseLevel = addedSkill.ExpertiseLevel,
                                Id = user.Id,
                                ApplicationUser = null
                            };
                            await _dbContext.Skills.AddAsync(skill);
                            await _dbContext.SaveChangesAsync();
                        }
                        return user;
                    }
                    else
                    {
                        return null;
                    }
                }
                else
                {
                    return null;
                }
            }
            else // If insertion of new user Failed
            {
                return null;
            }
        }
    }
}
