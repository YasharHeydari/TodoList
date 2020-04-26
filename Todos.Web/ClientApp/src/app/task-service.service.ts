import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TodoTask } from './Model/TodoTask';
import { environment } from 'src/environments/environment';
import {retry , catchError} from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';
import { throwError, Observable } from 'rxjs';
import { ITaskService } from './ITaskService';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService implements ITaskService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  
  constructor(private httpClient : HttpClient) { }

  public AddTask( task : TodoTask ) : Observable<TodoTask>{
    console.log("Before Calling POST");
    
    return this.httpClient.post<TodoTask>(environment.urlBase + environment.apiUrl, JSON.stringify(task) , this.httpOptions).
    pipe(
      catchError(this.ErrorHandler));
    
  }

  public EditTask( task : TodoTask ) : Observable<TodoTask>{
    console.log("Before Calling POST");
    
    return this.httpClient.put<TodoTask>(environment.urlBase + environment.apiUrl, JSON.stringify(task) , this.httpOptions).
    pipe(
      catchError(this.ErrorHandler));
    
  }

  public getTasks () : Observable<TodoTask[]>{
    console.log("Calling Service GetTasks");
    
    return this.httpClient.get<TodoTask[]>(environment.urlBase + environment.apiUrl ).pipe(
      retry(1), 
      catchError(this.ErrorHandler)
    );
    
  }

  public GetTaskById(id : number ) : Observable<TodoTask>{
    return this.httpClient.get<TodoTask>(environment.urlBase + environment.apiUrl + id ).pipe(
      catchError(this.ErrorHandler)
    );
  }

  public DeleteTask(taskId : number) : Observable<any> {
      return this.httpClient.delete<any>(environment.urlBase + environment.apiUrl + taskId).pipe(
        catchError(this.ErrorHandler)
      );
  }

  ErrorHandler(error){
    console.log("Error Occured!!!" + error);
    
    let errorMessage : string ; 
    if (error.error instanceof ErrorEvent){
      errorMessage = error.error.message; 
    } else {
      errorMessage = `Error Code : ${error.status} , Error Message : ${error.message}`
    }
    console.log(errorMessage);
    return  throwError(errorMessage);
  }
}
