using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MvcTaskManger.Identity;
using MvcTaskManger.ServiceContracts;
using MvcTaskManger.Services;
using System.Linq;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using MvcTaskManger.Models;
using Microsoft.CodeAnalysis;
using System.Collections.Generic;
using Task = System.Threading.Tasks.Task;

namespace MvcTaskManger
{
    public class Startup
    {
        private IConfiguration _configuration { get; }

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940


        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            // Add the TaskManagerDbContext as a service
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(_configuration.GetConnectionString("DefaultConnection")));

            // To Add Identity as service into IoC container
            services.AddIdentity<ApplicationUser, ApplicationRole>()

                    .AddEntityFrameworkStores<ApplicationDbContext>()

                    .AddDefaultTokenProviders()

                    .AddUserStore<UserStore<ApplicationUser, ApplicationRole, ApplicationDbContext, string>>()

                    .AddRoleStore<RoleStore<ApplicationRole, ApplicationDbContext, string>>();

            services.AddScoped<IUsersService, UsersService>();

            // Configure JWT authentication
            //Configure JWT Authentication
            var appSettingsSection = _configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);
            var appSettings = appSettingsSection.Get<AppSettings>();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ApplicationDbContext dbContext)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseAuthentication(); // To read the Identity cookie (checks if the user is authenticated or not )

            app.UseStaticFiles();

            app.UseMvc();

            AddCountries(dbContext).Wait();

            AddTaskPriorities(dbContext).Wait();

            CreateRoles(app).Wait();

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });
        }


        private async Task CreateRoles(IApplicationBuilder app)
        {
            using (var scope = app.ApplicationServices.CreateScope())
            {
                //initializing custom roles 
                var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<ApplicationRole>>();
                var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();

                // creating Creating Admin user and Admin role  
                if (!await roleManager.RoleExistsAsync("Admin"))
                {
                    // first we create Admin role   
                    var role = new ApplicationRole();
                    role.Name = "Admin";
                    await roleManager.CreateAsync(role);

                    //Here we create a Admin who will maintain the platform
                    if (await userManager.FindByEmailAsync("admin@gmail.com") == null)
                    {
                        var admin = new ApplicationUser();
                        admin.UserName = "admin@gmail.com";
                        admin.Email = "admin@gmail.com";
                        admin.CountryID = 1;
                        string adminPassword = "Admin@1234";

                        var result = await userManager.CreateAsync(admin, adminPassword);
                        //Add default Admin user to Role Admin    
                        if (result.Succeeded)
                        {
                            await userManager.AddToRoleAsync(admin, "Admin");
                        }
                    }
                }

                // creating Creating Employee role     
                if (!await roleManager.RoleExistsAsync("Employee"))
                {
                    var role = new ApplicationRole();
                    role.Name = "Employee";
                    await roleManager.CreateAsync(role);

                    //Here we create an Employee  (For Testing)
                    if (await userManager.FindByEmailAsync("employee@gmail.com") == null)
                    {
                        var employee = new ApplicationUser();
                        employee.UserName = "employee@gmail.com";
                        employee.Email = "employee@gmail.com";
                        employee.CountryID = 2;
                        string employeePassword = "Employee@1234";

                        var result = await userManager.CreateAsync(employee, employeePassword);
                        //Add default Employee user to Role Employee   
                        if (result.Succeeded)
                        {
                            await userManager.AddToRoleAsync(employee, "Employee");
                        }
                    }

                }

            }
        }

        private async Task AddCountries(ApplicationDbContext dbContext)
        {
            // Seed data into the table
            if (dbContext.Countries.Any() == false)
            {
                var data = new List<Country>
            {
                new Country() { CountryName = "China" },
                new Country() { CountryName = "United States" },
                new Country() { CountryName = "Indonesia" },
                new Country() { CountryName = "Brazil" },
                new Country() { CountryName = "Pakistan" },
                new Country() { CountryName = "Nigeria" },
                new Country() { CountryName = "Bangladesh" },
                new Country() { CountryName = "Russia" },
                new Country() { CountryName = "Japan" },
                new Country() { CountryName = "Mexico" },
                new Country() { CountryName = "Philippines" },
                new Country() { CountryName = "Vietnam" },
                new Country() { CountryName = "Ethiopia" },
                new Country() { CountryName = "Egypt" },
                new Country() { CountryName = "Germany" },
                new Country() { CountryName = "Iran" },
                new Country() { CountryName = "Turkey" },
                new Country() { CountryName = "Democratic Republic of the Congo" },
                new Country() { CountryName = "Thailand" },
                new Country() { CountryName = "France" },
                new Country() { CountryName = "United Kingdom" },
                new Country() { CountryName = "Italy" },
                new Country() { CountryName = "South Africa" },
                new Country() { CountryName = "South Korea" },
                new Country() { CountryName = "Myanmar" },
                new Country() { CountryName = "Spain" },
                new Country() { CountryName = "Colombia" },
                new Country() { CountryName = "Ukraine" },
                new Country() { CountryName = "Tanzania" },
                new Country() { CountryName = "Argentina" },
                new Country() { CountryName = "Kenya" },
                new Country() { CountryName = "Poland" },
                new Country() { CountryName = "Algeria" },
                new Country() { CountryName = "Canada" },
                new Country() { CountryName = "Uganda" },
                new Country() { CountryName = "Iraq" },
                new Country() { CountryName = "Morocco" },
                new Country() { CountryName = "Sudan" },
                new Country() { CountryName = "Peru" },
                new Country() { CountryName = "Uzbekistan" },
                new Country() { CountryName = "Saudi Arabia" },
                new Country() { CountryName = "Venezuela" },
                new Country() { CountryName = "Nepal" },
                new Country() { CountryName = "Afghanistan" },
                new Country() { CountryName = "Ghana" },
                new Country() { CountryName = "Yemen" },
                new Country() { CountryName = "North Korea" },
                new Country() { CountryName = "Mozambique" },
                new Country() { CountryName = "Taiwan" },
                };

                dbContext.Countries.AddRange(data);
                await dbContext.SaveChangesAsync();
            }
        }

        private async Task AddTaskPriorities(ApplicationDbContext dbContext)
        {
            // Seed data into the table
            if (dbContext.TaskPriorities.Any() == false)
            {
                var data = new List<TaskPriority>
            {
                new TaskPriority() { TaskPriorityName = "Urgent" },
                new TaskPriority() { TaskPriorityName = "Normal" },
                new TaskPriority() { TaskPriorityName = "Bellow Normal" },
                new TaskPriority() { TaskPriorityName = "Low" }
             };
                dbContext.TaskPriorities.AddRange(data);
                await dbContext.SaveChangesAsync();
            }
        }
    }
}
