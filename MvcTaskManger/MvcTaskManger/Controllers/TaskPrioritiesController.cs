using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MvcTaskManger.Identity;
using MvcTaskManger.Models;
using MvcTaskManger.ViewModels;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcTaskManger.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TaskPrioritiesController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public TaskPrioritiesController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        // GET: api/TaskPriorities
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskPriorityViewModel>>> GetAllTaskPriorities()
        {
            List<TaskPriorityViewModel> taskPrioritiesViewModel = (await _dbContext.TaskPriorities.OrderBy(temp => temp.TaskPriorityName).ToListAsync())
                .Select(taskPriority => taskPriority.ConvertTaskPriorityToTaskPriorityViewModel()).ToList();
            return taskPrioritiesViewModel;
        }

        // GET: api/TaskPriorities/5
        [HttpGet("{taskPriorityID}")]
        public async Task<ActionResult<TaskPriorityViewModel>> GetTaskPriorityByTaskPriorityID([FromRoute] int taskPriorityID)
        {
            var taskPriority = await _dbContext.TaskPriorities.FirstOrDefaultAsync(temp => temp.TaskPriorityID == taskPriorityID);

            if (taskPriority == null)
            {
                return null;
            }
            return Ok(taskPriority.ConvertTaskPriorityToTaskPriorityViewModel());
        }

        // POST: api/TaskPriorities
        [HttpPost]
        public async Task<ActionResult<TaskPriorityViewModel>> InsertTaskPriority([FromBody][Bind(nameof(TaskPriorityViewModel.TaskPriorityName))] TaskPriorityViewModel taskPriorityViewModel)
        {
            var newTaskPriority = taskPriorityViewModel.ConvertTaskPriorityViewModelToTaskPriority();

            await _dbContext.TaskPriorities.AddAsync(newTaskPriority);
            await _dbContext.SaveChangesAsync();

            var existingTaskPriorityViewModel = newTaskPriority.ConvertTaskPriorityToTaskPriorityViewModel();

            return CreatedAtAction("GetTaskPriorityByTaskPriorityID", new { taskPriorityID = existingTaskPriorityViewModel.TaskPriorityID }, existingTaskPriorityViewModel);
        }

        // PUT: api/TaskPriorities/5
        [HttpPut("{taskPriorityID}")]
        public async Task<IActionResult> UpdateTaskPriority([FromRoute] int taskPriorityID, [FromBody] TaskPriorityViewModel taskPriorityViewModel)
        {

            if (taskPriorityID != taskPriorityViewModel.TaskPriorityID)
            {
                return BadRequest(); //Response.StatusCode = StatusCodes.Status400BadRequest
            }

            var existingTaskPriority = await _dbContext.TaskPriorities.FirstOrDefaultAsync(temp => temp.TaskPriorityID == taskPriorityID);

            if (existingTaskPriority == null)
            {
                if (!_dbContext.TaskPriorities.Any())
                {
                    return BadRequest();
                }
                return NotFound();
            }

            existingTaskPriority.TaskPriorityName = taskPriorityViewModel.TaskPriorityName;
            await _dbContext.SaveChangesAsync();

            var existingTaskPriorityTwo = await _dbContext.TaskPriorities.FirstOrDefaultAsync(temp => temp.TaskPriorityID == taskPriorityViewModel.TaskPriorityID);

            return Ok(existingTaskPriorityTwo.ConvertTaskPriorityToTaskPriorityViewModel());
        }

        // DELETE: api/TaskPriorities/5
        [HttpDelete("{taskPriorityID}")]
        public async Task<IActionResult> DeleteTaskPriority([FromRoute] int taskPriorityID)
        {
            var taskPriority = await _dbContext.TaskPriorities.FirstOrDefaultAsync(temp => temp.TaskPriorityID == taskPriorityID);

            if (taskPriority == null)
            {
                if (!_dbContext.TaskPriorities.Any())
                {
                    return NotFound();
                }
                else
                {
                    return BadRequest();
                }
            }

            _dbContext.TaskPriorities.Remove(taskPriority);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }
        
    }
}
