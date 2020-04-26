using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query.ExpressionVisitors.Internal;
using Microsoft.Extensions.Logging;
using todos.DomainModel;
using Todos.DomainModel;

namespace Todos.DAO
{
    public class TodosDao : ITodosDao
    {
        private TodosDBContext db;
        private ILogger<TodosDao> logger;
        public TodosDao(TodosDBContext dBContext , ILogger<TodosDao> logger)
        {
            this.db = dBContext;
            this.logger = logger;
        }

        public async Task<IList<TodoTask>> GetTasks(TaskFilter filter)
        {
            int[] groupFilter;
            switch (filter.Severity)
            {
                case Severity.Urgent:
                    groupFilter = new int[2] {0,1} ;
                    break;
                case Severity.NonUrgent: 
                    groupFilter = new int[] {2,3};
                    break;
                default:
                    groupFilter = new int[]{0,1,2,3};
                    break;

            }
            logger.LogDebug("Query Parameters are : \n " +
                            "Skip : {0}" + "\n" +
                            "Task : {1}", filter.PageNum - 1 * filter.PageSize ,filter.PageSize );
            return await this.db.Tasks.Where(t => t.DueDate != null && t.DueDate > DateTime.Now && t.DueDate.Value < DateTime.Now.AddDays(filter.Days)
                                                              && groupFilter.Contains((int) t.TaskGroup))
                .OrderBy(t => t.DueDate)
                .Skip((filter.PageNum - 1) * filter.PageSize).Take(filter.PageSize).ToListAsync();
                //.Skip(0).Take(20).ToList();

        }

        public TodoTask AddTask(TodoTask task)
        {
            this.db.Tasks.Add(task);
            this.db.SaveChanges();
            return task;
        }

        public TodoTask GetTaskById(int id)
        {
            return this.db.Tasks.FirstOrDefault(tasks => tasks.TaskId == id);
        }

        public void DeleteTask(int id)
        {
            var task = this.db.Tasks.FirstOrDefault(tasks => tasks.TaskId == id);
            this.db.Tasks.Remove(task);
            this.db.SaveChanges(); 
        }

        public TodoTask EditTask(TodoTask task)
        {
            this.db.Tasks.Update(task);
            this.db.SaveChanges();
            return task; 
        }
    }
}