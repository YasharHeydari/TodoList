import { Component, OnInit, Injector } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { TodoTask, TaskGroupType, TaskStatus } from '../Model/TodoTask';
import { ActivatedRoute } from '@angular/router';
import { ServiceMap, ITaskService } from '../ITaskService';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  taskGroups = TaskGroupType;
  taskStates = TaskStatus;
  todoTasks: TodoTask[];

  stateKeys: string[] = Object.values(this.taskStates);
  groupKeys: string[] = Object.keys(this.taskGroups);

  service : ITaskService ; 
   
  constructor(private injector : Injector , private route : ActivatedRoute) { }
  param : string ; 

  ngOnInit() {
     
    this.route.url.subscribe((url) => {
      console.log( "Url is :", url.toString() ); 
      this.param = url.toString();
    });
    if (this.param  == undefined){
      this.param = "AllTasks";
    }
    console.log("TaskComponent called with param" , this.param);
    
    this.loadTasks(this.param);
  }

  loadTasks(param : string) {
    const injectable = ServiceMap.get(param); 
    this.service = this.injector.get(injectable);
    this.service.getTasks().subscribe(
      (res) => { this.todoTasks = res; }
    )

  }

  OnBtnDelete(taskId: number): void {
    console.log("Going to Delete task with Id" + taskId);
    let service = this.injector.get(TaskServiceService);
    service.DeleteTask(taskId).subscribe
      ((res) => {
        this.loadTasks(this.param);
      });
  }

  OnBtnSave(taskId: number , task : TodoTask){
    if (task.newStatus != undefined && task.newStatus != task.taskStatus) {
      let service = this.injector.get(TaskServiceService);
      task.taskStatus = task.newStatus;
      service.EditTask(task).subscribe(
        (res) => {
          this.loadTasks(this.param);
        }
        );
    }
    
  }
}
