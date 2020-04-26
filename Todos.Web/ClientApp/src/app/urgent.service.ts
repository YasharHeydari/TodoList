import { Injectable } from '@angular/core';
import { ITaskService } from './ITaskService';
import { Observable, throwError } from 'rxjs';
import { TodoTask } from './Model/TodoTask';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UrgentService implements ITaskService {

  constructor(private httpClient : HttpClient) { }

  getTasks(): Observable<TodoTask[]> {
    console.log("Calling Service GetUrgentTasks");
    
    return this.httpClient.get<TodoTask[]>(environment.urlBase + environment.apiUrl +'?Severity=1').pipe(
      retry(1), 
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
