using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using todos.DomainModel;

namespace Todos.DAO
{
    public class TodosDBContext : DbContext
    {
        public TodosDBContext(DbContextOptions options) :base(options)
        {
            
        }

       public DbSet<TodoTask>  Tasks { get; set; }
    }
}
