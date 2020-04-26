using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using NLog;
using NLog.Web;
using Todos.DAO;
using todos.DomainModel;
using Todos.DomainModel;

namespace Todos.Service
{
    public class TasksService : ITasksService
    {
        private ITodosDao dao;
        private ILogger<TasksService> logger;
        public TasksService(ITodosDao todosDao , ILogger<TasksService> logger)
        {
            this.logger = logger;
            this.dao = todosDao;
        }


        public async Task<IList<TodoTask>>GetTasks(TaskFilter filter)
        {
            this.logger.LogDebug("List Service Called..");
            this.logger.LogDebug("Filter is : {0}" , filter);
            return await this.dao.GetTasks(filter);
        }

        public TodoTask AddTask(TodoTask task)
        {
            task.RegisterDate = DateTime.Now;
            try
            {
                this.logger.LogDebug("Going to Call Add Task With data {0}" , task);
                return this.dao.AddTask(task);
            }
            catch(Exception e)
            {
                this.logger.LogError(e.Message);
                throw;
            }
        }

        public TodoTask GetTaskById(int id)
        {
            try
            {
                this.logger.LogDebug("Going to get task with Id {0} ", id);
                return this.dao.GetTaskById(id);
            }
            catch (Exception e)
            {
                this.logger.LogError(e.Message);
                throw;
            }
        }

        public void DeleteTask(int id)
        {
            try
            {
                this.logger.LogDebug("Going to delete task with Id {0} ", id);
                this.dao.DeleteTask(id);
            }
            catch (Exception e)
            {
                this.logger.LogError(e.Message);
                throw;
            }
        }

        public TodoTask EditTask(TodoTask task)
        {
            try
            {
                this.logger.LogDebug("Going to Edit task with Id {0} ", task.TaskId);
                return this.dao.EditTask(task);
            }
            catch (Exception e)
            {
                this.logger.LogError(e.Message);
                throw;
            }
        }
    }
}
