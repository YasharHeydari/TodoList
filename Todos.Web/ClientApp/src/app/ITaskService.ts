import { Observable } from 'rxjs';
import { TaskServiceService } from './task-service.service';
import { UrgentService } from './urgent.service';
import { LastMonthService } from './last-month.service';

export interface ITaskService {
    getTasks() : Observable<any>;
}

export const ServiceMap = new Map().set('MonthTasks' , LastMonthService)
.set('UrgentTasks' , UrgentService)
.set('AllTasks' , TaskServiceService);