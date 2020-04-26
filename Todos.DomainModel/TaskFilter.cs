using System;
using System.Collections.Generic;
using System.Text;

namespace Todos.DomainModel
{
    public enum Severity
    {
        All = 0 , 
        Urgent  =1 , 
        NonUrgent =2 
    }
    public class TaskFilter
    {
        public int Days { get; set; }

        public Severity Severity { get; set; }

        public int PageNum { get; set; }

        public int PageSize { get; set; }

        public TaskFilter()
        {
            this.Days = 180;
            this.Severity = Severity.All;
            this.PageNum = 1;
            this.PageSize = 20; 
        }

        public override string ToString()
        {
            return
                "Days : " + this.Days +
                "Severity : " + this.Severity +
                "PageNum : " + this.PageNum +
                "PageSize :" + this.PageSize; 
        }
    }
}
