import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TaskDetailsComponent } from './component/task-details/task-details.component';
import { LayoutComponent } from './component/layout/layout.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {
      path: 'dashboard',
      component: LayoutComponent,
      children: [
        { path: '', component: DashboardComponent },
        { path: 'taskDetails', component: TaskDetailsComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
