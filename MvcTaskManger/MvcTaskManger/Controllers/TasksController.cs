using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MvcTaskManger.Identity;
using TaskClass = MvcTaskManger.Models.Task;
using Task = System.Threading.Tasks.Task;
using TaskStatusClass = MvcTaskManger.Models.TaskStatus;
using MvcTaskManger.ViewModels;
using System.Threading.Tasks;
using MvcTaskManger.Models;
using System;
using Microsoft.CodeAnalysis;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore.Internal;

namespace MvcTaskManger.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TasksController : ControllerBase
    {
        private ApplicationDbContext _dbContext;
        private readonly UserManager<ApplicationUser> _userManager;

        public TasksController(ApplicationDbContext dbContext, UserManager<ApplicationUser> userManager)
        {
            _dbContext = dbContext;
            _userManager = userManager;
        }

        // GET: api/Tasks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GroupedTaskViewModel>>> GetAllGroupedTasks()
        {
            string currentUserId = User.Identity.Name;
            List<GroupedTask> groupedTasks = new List<GroupedTask>();
            List<TaskStatusClass> taskStatuses = await _dbContext.TaskStatuses.ToListAsync();
            List<TaskClass> tasks = _dbContext.Tasks
                .Include(temp => temp.Project).ThenInclude(temp => temp.ClientLocation)
                .Include(temp => temp.CreatedByUser)
                .Include(temp => temp.AssignedToUser)
                .Include(temp => temp.TaskPriority)
                .Include(temp => temp.TaskStatusDetails)
                .Where(temp => temp.CreatedBy == currentUserId || temp.AssignedTo == currentUserId)
                .OrderBy(temp => temp.TaskPriorityID)
                .ThenByDescending(temp => temp.LastUpdatedOn).ToList();

            foreach (var item in tasks)
            {
                item.TaskStatusDetails = item.TaskStatusDetails.OrderByDescending(temp => temp.StatusUpdationDateTime).ToList();
            }

            foreach (var item in taskStatuses)
            {
                GroupedTask groupedTask = new GroupedTask();
                groupedTask.TaskStatusName = item.TaskStatusName;
                groupedTask.Tasks = tasks.Where(temp => temp.CurrentStatus == item.TaskStatusName).ToList();

                if (groupedTask.Tasks.Count > 0)
                {
                    groupedTasks.Add(groupedTask);
                }
            }
            var groupedTasksViewModel = groupedTasks
                .Select(groupedTask => groupedTask.ConvertGroupedTaskToGroupedTaskViewModel()).ToList();

            return groupedTasksViewModel;
        }

        // GET: api/Tasks/5
        [HttpGet("{taskID}")]
        public async Task<ActionResult<TaskViewModel>> GetTaskByTaskID([FromRoute] int taskID)
        {
            var task = await _dbContext.Tasks
                .Include(temp => temp.Project).ThenInclude(temp => temp.ClientLocation)
                .Include(temp => temp.CreatedByUser)
                .Include(temp => temp.AssignedToUser)
                .Include(temp => temp.TaskPriority)
                .Include(temp => temp.TaskStatusDetails)
                .FirstOrDefaultAsync(temp => temp.TaskID == taskID);

            if (task == null)
            {
                return null;
            }
            return Ok(task.ConvertTaskToTaskViewModel());
        }

        // POST: api/Tasks
        [HttpPost]
        public async Task<ActionResult<TaskViewModel>> InsertTask([FromBody]
        [Bind(nameof(TaskViewModel.TaskTitle),nameof(TaskViewModel.Description), nameof(TaskViewModel.ProjectID),
            nameof(TaskViewModel.AssignedTo),nameof(TaskViewModel.TaskPriorityID),nameof(TaskViewModel.CurrentStatus) )]TaskViewModel taskViewModel)
        {
            var newtask = taskViewModel.ConvertTaskViewModelToTask();
            newtask.CreatedOn = DateTime.Now;
            newtask.LastUpdatedOn = DateTime.Now;
            newtask.Project = null;
            newtask.CreatedBy = User.Identity.Name;
            newtask.CreatedByUser = null;
            newtask.AssignedToUser = null;
            newtask.TaskPriority = null;
            newtask.CurrentTaskStatusID = 1;
            newtask.TaskStatusDetails = null;

            await _dbContext.Tasks.AddAsync(newtask);
            await _dbContext.SaveChangesAsync();

            TaskStatusDetail taskStatusDetail = new TaskStatusDetail()
            {
                TaskID = newtask.TaskID,
                TaskStatusID = newtask.CurrentTaskStatusID,
                TaskStatus = null,
                UserID = newtask.CreatedBy,
                User = null,
                Description = "Task Created",
                StatusUpdationDateTime = DateTime.Now,
            };

            await _dbContext.TaskStatusDetails.AddAsync(taskStatusDetail);
            await _dbContext.SaveChangesAsync();

            var existingTask = await _dbContext.Tasks.FirstOrDefaultAsync(temp => temp.TaskID == newtask.TaskID);
            var existingTaskViewModel = existingTask.ConvertTaskToTaskViewModel();

            return CreatedAtAction("GetTaskByTaskID", new { taskID = existingTaskViewModel.TaskID }, existingTaskViewModel);
        }

        // PUT: api/Tasks/updateTaskStatus/2
        [HttpPut("updateTaskStatus/{taskID}")]
        public async Task<IActionResult> UpdateTaskStatus([FromRoute] int taskID,
         [FromBody][Bind(nameof(TaskStatusDetailViewModel.TaskID), nameof(TaskStatusDetailViewModel.Description), nameof(TaskStatusDetailViewModel.TaskStatusID))] TaskStatusDetailViewModel taskStatusDetailViewModel)
        {
            if (taskID != taskStatusDetailViewModel.TaskID)
            {
                return BadRequest(); //Response.StatusCode = StatusCodes.Status400BadRequest
            }

            TaskStatusDetail taskStatusDetail = new TaskStatusDetail();
            taskStatusDetail.TaskID = taskStatusDetailViewModel.TaskID;
            taskStatusDetail.TaskStatusID = taskStatusDetailViewModel.TaskStatusID;
            taskStatusDetail.TaskStatus = null;
            taskStatusDetail.UserID = User.Identity.Name;
            taskStatusDetail.User = null;
            taskStatusDetail.Description = taskStatusDetailViewModel.Description;
            taskStatusDetail.StatusUpdationDateTime = DateTime.Now;
            try
            {
                await _dbContext.TaskStatusDetails.AddAsync(taskStatusDetail);
                await _dbContext.SaveChangesAsync();
            }
            catch (Exception exp)
            {

            }


            TaskClass task = await _dbContext.Tasks.FirstOrDefaultAsync(temp => temp.TaskID == taskID);
            if (task == null)
            {
                if (!_dbContext.Tasks.Any())
                {
                    return NotFound();
                }
                else
                {
                    return BadRequest();
                }
            }

            task.LastUpdatedOn = DateTime.Now;
            task.CurrentStatus = (await _dbContext.TaskStatuses.FirstOrDefaultAsync(temp => temp.TaskStatusID == taskStatusDetail.TaskStatusID)).TaskStatusName;
            task.CurrentTaskStatusID = taskStatusDetail.TaskStatusID;
            await _dbContext.SaveChangesAsync();

            var existingtaskStatusDetailViewModel = taskStatusDetail.ConvertTaskStatusDetailToTaskStatusDetailViewModel();

            return Ok(existingtaskStatusDetailViewModel);
        }


        // PUT: api/Tasks/updateTask/5
        [HttpPut("updateTask/{taskID}")]
        public async Task<IActionResult> UpdateTask([FromRoute] int taskID,
        [FromBody][Bind(nameof(TaskViewModel.TaskID),nameof(TaskViewModel.TaskTitle),nameof(TaskViewModel.Description), nameof(TaskViewModel.ProjectID),
            nameof(TaskViewModel.AssignedTo),nameof(TaskViewModel.TaskPriorityID),nameof(TaskViewModel.CurrentTaskStatusID) )]TaskViewModel taskViewModel)
        {
            if (taskID != taskViewModel.TaskID)
            {
                return BadRequest(); //Response.StatusCode = StatusCodes.Status400BadRequest
            }

            var existingtask = await _dbContext.Tasks
                .Include(temp => temp.Project).ThenInclude(temp => temp.ClientLocation)
                .Include(temp => temp.CreatedByUser)
                .Include(temp => temp.AssignedToUser)
                .Include(temp => temp.TaskPriority)
                .Include(temp => temp.TaskStatusDetails)
                .FirstOrDefaultAsync(temp => temp.TaskID == taskID);

            if (existingtask == null)
            {
                if (!_dbContext.Tasks.Any())
                {
                    return BadRequest();
                }
                return NotFound();
            }

            existingtask.TaskTitle = taskViewModel.TaskTitle;
            existingtask.Description = taskViewModel.Description;
            existingtask.LastUpdatedOn = DateTime.Now;
            existingtask.ProjectID = taskViewModel.ProjectID;
            existingtask.AssignedTo = taskViewModel.AssignedTo;
            existingtask.TaskPriorityID = taskViewModel.TaskPriorityID;
            existingtask.CurrentTaskStatusID = taskViewModel.CurrentTaskStatusID;
            existingtask.CurrentStatus = (await _dbContext.TaskStatuses.FirstOrDefaultAsync(temp => temp.TaskStatusID == taskViewModel.CurrentTaskStatusID)).TaskStatusName;
            await _dbContext.SaveChangesAsync();

            TaskStatusDetail taskStatusDetail = new TaskStatusDetail()
            {
                TaskID = existingtask.TaskID,
                TaskStatusID = existingtask.CurrentTaskStatusID,
                TaskStatus = null,
                UserID = existingtask.CreatedBy,
                User = null,
                Description = "Task Updated",
                StatusUpdationDateTime = DateTime.Now,
            };

            await _dbContext.TaskStatusDetails.AddAsync(taskStatusDetail);
            await _dbContext.SaveChangesAsync();

            return Ok(existingtask.ConvertTaskToTaskViewModel());
        }
    }
}
