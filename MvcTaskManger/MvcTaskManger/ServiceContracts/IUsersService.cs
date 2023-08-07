using Microsoft.AspNetCore.Mvc;
using MvcTaskManger.Identity;
using MvcTaskManger.ViewModels;
using System.Threading.Tasks;

namespace MvcTaskManger.ServiceContracts
{
    public interface IUsersService
    {
        Task<ApplicationUser> Authenticated(LoginViewModel loginViewModel);

        Task<ApplicationUser> Register(SignUpViewModel signUpViewModel);

        Task<ApplicationUser> GetUserByEmail(string email);
    }
}
