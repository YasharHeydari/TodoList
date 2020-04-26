using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using todos.DomainModel;
using Todos.DomainModel;

namespace Todos.DAO
{
    public interface ITodosDao
    {
        Task<IList<TodoTask>> GetTasks(TaskFilter filter);

        TodoTask AddTask(TodoTask task);

        TodoTask GetTaskById(int id);

        void DeleteTask(int id);

        TodoTask EditTask(TodoTask task);
    }
}
