using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Authentication.ExtendedProtection;
using System.Text;


namespace todos.DomainModel
{
    public class TodoTask
    {
        [Key]
        public  int TaskId { get; set; }   

        [Display(Name = "Task Name")]
        [Required(ErrorMessage = "Please Specify {0}")]
        [MaxLength(200)]
        public string TaskName { get; set; }


        [Display(Name = "Task Group Type")]
        [Required(ErrorMessage = "Please Specify {0}")]
        public TaskGroupType TaskGroup { get; set; }

        [Display(Name = "Task Status")]
        [Required(ErrorMessage = "Please Specify {0}")]
        public TaskStatus TaskStatus { get; set; }

        [Display(Name = "Register Date")]
        public DateTime RegisterDate { get; set; }

        [Display(Name = "Due Date")]
        public DateTime? DueDate { get; set; }

        public override string ToString()
        {
            return " ID: " + this.TaskId +
                   " TaskName:" + this.TaskName;
        }
    }
}
