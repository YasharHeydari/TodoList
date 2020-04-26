using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Bson;
using todos.DomainModel;
using Todos.DomainModel;

namespace Todos.Service
{
    public interface ITasksService
    {
        Task<IList<TodoTask>> GetTasks(TaskFilter filter);

        TodoTask AddTask(TodoTask task);

        TodoTask GetTaskById(int id);

        void DeleteTask(int id);

        TodoTask EditTask(TodoTask task);
    }
}
