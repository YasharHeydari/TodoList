import { Component, OnInit } from '@angular/core';
import { TodoTask, TaskGroupType, TaskStatus } from '../Model/TodoTask';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Observable } from "rxjs";
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  taskGroups = TaskGroupType;
  taskStates = TaskStatus;
  public taskGroupKeys: string[] = Object.keys(this.taskGroups);
  public taskStatusKeys: string[] = Object.keys(this.taskStates);
  public todoTask: TodoTask;
  registerForm: FormGroup;
  submitted = false;
  id: number;

  constructor(private formBuilder: FormBuilder, private taskService: TaskServiceService, private router: Router, private route: ActivatedRoute) {
    this.todoTask = new TodoTask();
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      TaskGroup: ['', Validators.required],
      TaskStatus: ['', Validators.required],
      DueDate: ['']
    });
    this.route.params.subscribe(
      (params) => {
        this.id = +params["id"];
        console.log(" id is " + this.id);
      });
    if (this.id != null) {
      this.taskService.GetTaskById(this.id).subscribe(
        (res) => { 
          this.todoTask = res; 
          this.registerForm.patchValue({
            Name: this.todoTask.taskName,
            TaskGroup: this.todoTask.taskGroup,
            TaskStatus: this.todoTask.taskStatus,
            DueDate: this.todoTask.dueDate,
          });        }
      );
      

    }

  }

  get TaskName() { return this.registerForm.get('Name') };
  get TaskGroup() { return this.registerForm.get('TaskGroup'); }
  get TaskStatus() { return this.registerForm.get('TaskStatus'); }

  Submit() {
    this.submitted = true;
    this.todoTask.taskName = this.registerForm.value.Name;
    this.todoTask.taskGroup = this.registerForm.value.TaskGroup;
    this.todoTask.taskStatus = this.registerForm.value.TaskStatus;
    this.todoTask.dueDate = this.registerForm.value.DueDate;
    console.log(JSON.stringify(this.todoTask));

    if (this.registerForm.invalid) {
      console.log('Form is Invalid');
      return;
    }
    this.todoTask.taskName = this.registerForm.value.Name;
    this.todoTask.taskGroup = this.registerForm.value.TaskGroup;
    this.todoTask.taskStatus = this.registerForm.value.TaskStatus;
    this.todoTask.dueDate = this.registerForm.value.DueDate;

    //going to call Service
    if (this.todoTask.taskId > 0) {
      this.taskService.EditTask(this.todoTask)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['/Tasks'])
        });
    }
    else {
      this.taskService.AddTask(this.todoTask)
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['/Tasks'])
        });
    }
  }
}
