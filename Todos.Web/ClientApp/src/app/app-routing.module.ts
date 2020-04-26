import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './add-edit/add-edit.component';
import { TasklistComponent } from './tasklist/tasklist.component';


const routes: Routes = [
  {path:'' , component: TasklistComponent},
  {path: 'MonthTasks' , component:TasklistComponent},
  {path: 'UrgentTasks' , component:TasklistComponent},
  {path: 'AllTasks' , component: TasklistComponent},
  {path: 'AddEdit'  , component : AddEditComponent},
  {path: 'AddEdit/:id' , component : AddEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
