using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using MvcTaskManger.Identity;
using MvcTaskManger.Models;
using MvcTaskManger.ViewModels;

namespace MvcTaskManger.Controllers
{


    [ApiController]
    [Route("api/[controller]")]
    //[Authorize]
    public class ProjectsController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public ProjectsController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/Projects
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProjectViewModel>>> GetAllProjects()
        {
            //Thread.Sleep(1000);
            List<ProjectViewModel> projectsViewModel = (await _dbContext.Projects.Include(nameof(ClientLocation)).ToListAsync())
                .Select(project => project.ConvertProjectToProjectViewModel()).ToList();
            return projectsViewModel;
        }

        // GET: api/Projects/5
        [HttpGet("{projectID}")]
        public async Task<ActionResult<ProjectViewModel>> GetProjectByProjectID([FromRoute] int projectID)
        {
            var project = await _dbContext.Projects.Include(nameof(ClientLocation)).FirstOrDefaultAsync(temp => temp.ProjectID == projectID);

            if (project == null)
            {
                return null;
            }
            return Ok(project.ConvertProjectToProjectViewModel());
        }

        // POST: api/Projects
        [HttpPost]
        public async Task<ActionResult<ProjectViewModel>> InsertProject([FromBody] ProjectViewModel projectViewModel)
        {
            projectViewModel.ClientLocation = null;
            _dbContext.Projects.Add(projectViewModel.ConvertProjectViewModelToProject());
            await _dbContext.SaveChangesAsync();

            var existingProjectViewModel = (await _dbContext.Projects.Include(nameof(ClientLocation)).FirstOrDefaultAsync(temp => temp.ProjectID == projectViewModel.ProjectID))
                .ConvertProjectToProjectViewModel();

            return CreatedAtAction("GetProjectByProjectID", new { projectID = projectViewModel.ProjectID }, existingProjectViewModel);
        }

        // PUT: api/Projects/5
        [HttpPut("{projectID}")]
        public async Task<IActionResult> UpdateProject([FromRoute] int projectID, [FromBody] ProjectViewModel projectViewModel)
        {


            if (projectID != projectViewModel.ProjectID)
            {
                return BadRequest(); //Response.StatusCode = StatusCodes.Status400BadRequest
            }

            var existingProject = await _dbContext.Projects.Include(temp => temp.ClientLocation).FirstOrDefaultAsync(temp => temp.ProjectID == projectID);

            if (existingProject == null)
            {
                if (!_dbContext.Projects.Any())
                {
                    return BadRequest();
                }
                return NotFound();
            }

            existingProject.ProjectName = projectViewModel.ProjectName;
            existingProject.DateOfStart = Convert.ToDateTime(projectViewModel.DateOfStart);
            existingProject.TeamSize = projectViewModel.TeamSize;
            existingProject.Active = projectViewModel.Active;
            existingProject.Status = projectViewModel.Status;
            existingProject.ClientLocationID = projectViewModel.ClientLocationID;
            existingProject.ClientLocation = existingProject.ClientLocation;
            await _dbContext.SaveChangesAsync();

            var existingProjectTwo = await _dbContext.Projects.Include(temp => temp.ClientLocation).FirstOrDefaultAsync(temp => temp.ProjectID == projectViewModel.ProjectID);

            return Ok(existingProjectTwo.ConvertProjectToProjectViewModel());
        }


        // DELETE: api/Projects/5
        [HttpDelete("{projectID}")]
        public async Task<IActionResult> DeleteProject([FromRoute] int projectID)
        {
            var project = await _dbContext.Projects.Include(nameof(ClientLocation)).FirstOrDefaultAsync(temp => temp.ProjectID == projectID);

            if (project == null)
            {
                if (!_dbContext.Projects.Any())
                {
                    return NotFound();
                }
                else
                {
                    return BadRequest();
                }
            }

            _dbContext.Projects.Remove(project);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/Projects/5
        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<ProjectViewModel>>> SearchProjects([FromQuery] string searchBy, [FromQuery] string searchText)
        {
            List<ProjectViewModel> projectsViewModel = new List<ProjectViewModel>();

            if (string.IsNullOrEmpty(searchBy) || string.IsNullOrEmpty(searchText))
            {
                return (await _dbContext.Projects.Include(nameof(ClientLocation)).ToListAsync())
                    .Select(project => project.ConvertProjectToProjectViewModel()).ToList();
            }

            switch (searchBy)
            {
                case nameof(ProjectViewModel.ProjectID):
                    projectsViewModel = (await _dbContext.Projects.Include(nameof(ClientLocation)).Where(temp => temp.ProjectID.ToString().Contains(searchText)).ToListAsync())
                        .Select(project => project.ConvertProjectToProjectViewModel()).ToList();
                    break;
                case nameof(ProjectViewModel.ProjectName):
                    projectsViewModel = (await _dbContext.Projects.Include(nameof(ClientLocation)).Where(temp => temp.ProjectName.Contains(searchText)).ToListAsync())
                        .Select(project => project.ConvertProjectToProjectViewModel()).ToList();
                    break;
                case nameof(ProjectViewModel.DateOfStart):
                    projectsViewModel = (await _dbContext.Projects.Include(nameof(ClientLocation)).Where(temp => temp.DateOfStart.ToString().Contains(searchText)).ToListAsync())
                        .Select(person => person.ConvertProjectToProjectViewModel()).ToList();
                    break;
                case nameof(ProjectViewModel.TeamSize):
                    projectsViewModel = (await _dbContext.Projects.Include(nameof(ClientLocation)).Where(temp => temp.TeamSize.ToString().Contains(searchText)).ToListAsync())
                        .Select(person => person.ConvertProjectToProjectViewModel()).ToList();
                    break;
                case nameof(ProjectViewModel.ClientLocationID):
                    projectsViewModel = (await _dbContext.Projects.Include(nameof(ClientLocation)).Where(temp => temp.ClientLocation != null && temp.ClientLocation.ClientLocationName.Contains(searchText)).ToListAsync())
                        .Select(person => person.ConvertProjectToProjectViewModel()).ToList();
                    break;
                case nameof(ProjectViewModel.Status):
                    projectsViewModel = (await _dbContext.Projects.Include(nameof(ClientLocation)).Where(temp => temp.Status.Contains(searchText)).ToListAsync())
                        .Select(person => person.ConvertProjectToProjectViewModel()).ToList();
                    break;
                case nameof(ProjectViewModel.Active):
                    projectsViewModel = (await _dbContext.Projects.Include(nameof(ClientLocation)).Where(temp => temp.Active.ToString().Contains(searchText)).ToListAsync())
                        .Select(person => person.ConvertProjectToProjectViewModel()).ToList();
                    break;
                default:
                    projectsViewModel = (await _dbContext.Projects.Include(nameof(ClientLocation)).ToListAsync())
                        .Select(person => person.ConvertProjectToProjectViewModel()).ToList();
                    break;
            }

            return projectsViewModel;
        }


        // Local Function
        private bool ProjectExists(int projectID)
        {
            return (_dbContext.Projects?.Any(e => e.ProjectID == projectID)).GetValueOrDefault();
        }

    }
}