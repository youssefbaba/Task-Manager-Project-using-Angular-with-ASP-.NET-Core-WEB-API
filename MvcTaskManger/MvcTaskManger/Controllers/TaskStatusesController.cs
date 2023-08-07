using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
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
    public class TaskStatusesController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public TaskStatusesController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/TaskStatuses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskStatusViewModel>>> GetAllTaskStatuses()
        {
            List<TaskStatusViewModel> taskStatusesViewModel = (await _dbContext.TaskStatuses.ToListAsync())
                .Select(taskStatus => taskStatus.ConvertTaskStatusToTaskStatusViewModel()).ToList();
            return taskStatusesViewModel;
        }

        // GET: api/TaskStatuses/5
        [HttpGet("{taskStatusID}")]
        public async Task<ActionResult<TaskStatusViewModel>> GetTaskStatusByTaskStatusID([FromRoute] int taskStatusID)
        {
            var taskStatus = await _dbContext.TaskStatuses.FirstOrDefaultAsync(temp => temp.TaskStatusID == taskStatusID);

            if (taskStatus == null)
            {
                return null;
            }
            return Ok(taskStatus.ConvertTaskStatusToTaskStatusViewModel());
        }

        // POST: api/TaskStatuses
        [HttpPost]
        public async Task<ActionResult<TaskStatusViewModel>> InsertTaskStatus([FromBody][Bind(nameof(TaskStatusViewModel.TaskStatusName))] TaskStatusViewModel taskStatusViewModel)
        {
            var newTaskStatus = taskStatusViewModel.ConvertTaskStatusViewModelToTaskStatus();

            await _dbContext.TaskStatuses.AddAsync(newTaskStatus);
            await _dbContext.SaveChangesAsync();

            var existingTaskStatusViewModel = newTaskStatus.ConvertTaskStatusToTaskStatusViewModel();

            return CreatedAtAction("GetTaskStatusByTaskStatusID", new { taskStatusID = existingTaskStatusViewModel.TaskStatusID }, existingTaskStatusViewModel);
        }

        // PUT: api/TaskStatuses/5
        [HttpPut("{taskStatusID}")]
        public async Task<IActionResult> UpdateTaskStatus([FromRoute] int taskStatusID, [FromBody] TaskStatusViewModel taskStatusViewModel)
        {

            if (taskStatusID != taskStatusViewModel.TaskStatusID)
            {
                return BadRequest(); //Response.StatusCode = StatusCodes.Status400BadRequest
            }

            var existingTaskStatus = await _dbContext.TaskStatuses.FirstOrDefaultAsync(temp => temp.TaskStatusID == taskStatusID);

            if (existingTaskStatus == null)
            {
                if (!_dbContext.TaskStatuses.Any())
                {
                    return BadRequest();
                }
                return NotFound();
            }

            existingTaskStatus.TaskStatusName = taskStatusViewModel.TaskStatusName;
            await _dbContext.SaveChangesAsync();

            var existingTaskStatusTwo = await _dbContext.TaskStatuses.FirstOrDefaultAsync(temp => temp.TaskStatusID == taskStatusViewModel.TaskStatusID);

            return Ok(existingTaskStatusTwo.ConvertTaskStatusToTaskStatusViewModel());
        }

        // DELETE: api/TaskStatuses/5
        [HttpDelete("{taskStatusID}")]
        public async Task<IActionResult> DeleteTaskStatus([FromRoute] int taskStatusID)
        {
            var taskStatus = await _dbContext.TaskStatuses.FirstOrDefaultAsync(temp => temp.TaskStatusID == taskStatusID);

            if (taskStatus == null)
            {
                if (!_dbContext.TaskStatuses.Any())
                {
                    return NotFound();
                }
                else
                {
                    return BadRequest();
                }
            }

            _dbContext.TaskStatuses.Remove(taskStatus);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
