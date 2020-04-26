using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using todos.DomainModel;
using Todos.Service;
using Todos.DomainModel;

namespace Todos.Web.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private ITasksService service;
        private ILogger<TasksController> logger;
        public TasksController(ITasksService tasksService, ILogger<TasksController> logger)
        {
            this.service = tasksService;
            this.logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<IList<TodoTask>>> GetTasks([FromQuery] TaskFilter filter)
        {
            return Ok(await this.service.GetTasks(filter));
        }

        [HttpPost]
        public IActionResult AddTask([FromBody] TodoTask task)
        {
            try
            {
                service.AddTask(task);
                return StatusCode(201);
            }
            catch (Exception e)
            {
                return StatusCode(406 , new { message= e.Message});
            }

        }

        [HttpPut]
        public IActionResult EditTask([FromBody]TodoTask task)
        {
            try
            {
                service.EditTask(task);
                return StatusCode(201);
            }
            catch (Exception e)
            {
                return StatusCode(406, new { message = e.Message });
            }

        }

        [HttpGet("{id}")]
        public ActionResult<TodoTask> GetTaskById([FromRoute] int id)
        {
            try
            {
                return Ok(this.service.GetTaskById(id));
            }
            catch (Exception e)
            {
                return StatusCode(304, new {message = e.Message});
            }
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteTask([FromRoute]int id)
        {
            try
            {
                this.service.DeleteTask(id);
                return Ok();
            }
            catch (Exception e)
            {
                return StatusCode(400, new {message = e.Message});
            }
        }
    }
}