import { Injectable } from '@angular/core';
import { ITaskService } from './ITaskService';
import { TodoTask } from './Model/TodoTask';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastMonthService implements ITaskService {

  constructor(private httpClient: HttpClient) { }

  getTasks(): import("rxjs").Observable<TodoTask[]> {
    console.log("Calling Service GetLastMonthTasks ");
    return this.httpClient.get<TodoTask[]>(environment.urlBase + environment.apiUrl+'?Days=30').pipe(
      retry(1),
      catchError(this.ErrorHandler)
    );

  }
  ErrorHandler(error) {
    console.log("Error Occured!!!" + error);

    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} , Error Message : ${error.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}


