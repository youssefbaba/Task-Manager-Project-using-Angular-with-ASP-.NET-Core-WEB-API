using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MvcTaskManger.Models;
using System;
using Project = MvcTaskManger.Models.Project;

namespace MvcTaskManger.Identity
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, string>
    {
        // Properties
        public DbSet<Project> Projects { get; set; }

        public DbSet<ClientLocation> ClientLocations { get; set; }

        public DbSet<Country> Countries { get; set; }

        public DbSet<Skill> Skills { get; set; }

        public DbSet<TaskPriority> TaskPriorities { get; set; }

        public DbSet<TaskStatus> TaskStatuses { get; set; }

        public DbSet<Task> Tasks { get; set; }

        public DbSet<TaskStatusDetail> TaskStatusDetails { get; set; }

        // Constructors
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected ApplicationDbContext()
        {
        }

        // Methods
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // To map between the "Project" entity and the "Projects" database table.
            modelBuilder.Entity<Project>().ToTable(nameof(Projects));

            // To map between the "ClientLocation" entity and the "ClientLocations" database table.
            modelBuilder.Entity<ClientLocation>().ToTable(nameof(ClientLocations));

            // To map between the "Country" entity and the "Countries" database table.
            modelBuilder.Entity<Country>().ToTable(nameof(Countries));

            // To map between the "Skill" entity and the "Skills" database table.
            modelBuilder.Entity<Skill>().ToTable(nameof(Skills));

            // To map between the "TaskPriority" entity and the "TaskPriorities" database table.
            modelBuilder.Entity<TaskPriority>().ToTable(nameof(TaskPriorities));

            // To map between the "TaskStatus" entity and the "TaskStatuses" database table.
            modelBuilder.Entity<TaskStatus>().ToTable(nameof(TaskStatuses));

            // To map between the "Task" entity and the "Tasks" database table.
            modelBuilder.Entity<Task>().ToTable(nameof(Tasks));

            // To map between the "TaskStatusDetail" entity and the "TaskStatusDetails" database table.
            modelBuilder.Entity<TaskStatusDetail>().ToTable(nameof(TaskStatusDetails));


            // To set Seed data for the "Products" table
            modelBuilder.Entity<Project>().HasData(
                new Project { ProjectID = 1, ProjectName = "E-Commerce Platform", DateOfStart = new DateTime(2020, 04, 24), TeamSize = 15, Active = true, Status = "In Force", ClientLocationID = 1 },
                new Project { ProjectID = 2, ProjectName = "Social Media Platform", DateOfStart = new DateTime(2019, 01, 05), TeamSize = 12, Active = true, Status = "Support", ClientLocationID = 2 },
                new Project { ProjectID = 3, ProjectName = "Job App", DateOfStart = new DateTime(2020, 10, 09), TeamSize = 09, Active = false, Status = "Support", ClientLocationID = 3 },
                new Project { ProjectID = 4, ProjectName = "Healthcare App", DateOfStart = new DateTime(2021, 02, 20), TeamSize = 10, Active = true, Status = "In Force", ClientLocationID = 4 },
                new Project { ProjectID = 5, ProjectName = "Gaming App", DateOfStart = new DateTime(2020, 04, 24), TeamSize = 16, Active =  false, Status = "In Force", ClientLocationID = 5 }
            );

            // To set Seed data for the "ClientLocations" table
            modelBuilder.Entity<ClientLocation>().HasData(
                new ClientLocation { ClientLocationID = 1, ClientLocationName = "New York" },
                new ClientLocation { ClientLocationID = 2, ClientLocationName = "Chicago" },
                new ClientLocation { ClientLocationID = 3, ClientLocationName = "Las Vegas" },
                new ClientLocation { ClientLocationID = 4, ClientLocationName = "Seattle" },
                new ClientLocation { ClientLocationID = 5, ClientLocationName = "San Francisco" },
                new ClientLocation { ClientLocationID = 6, ClientLocationName = "Charleston" },
                new ClientLocation { ClientLocationID = 7, ClientLocationName = "Washington" }
            );

            // To set Seed data for the "TaskStatuses" table
            modelBuilder.Entity<TaskStatus>().HasData(
                new TaskStatus { TaskStatusID = 1, TaskStatusName = "Holding"},
                new TaskStatus { TaskStatusID = 2, TaskStatusName = "Prioritized"},
                new TaskStatus { TaskStatusID = 3, TaskStatusName = "Started"},
                new TaskStatus { TaskStatusID = 4, TaskStatusName = "Finished"},
                new TaskStatus { TaskStatusID = 5, TaskStatusName = "Reverted"}
            );

        }
    }
}
