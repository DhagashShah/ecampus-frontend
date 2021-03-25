import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AssignCourseComponent } from './assign-course/assign-course.component';
import { BatchbyidComponent } from './batchbyid/batchbyid.component';
import { CourseComponent } from './course/course.component';
import { ListBatchComponent } from './list-batch/list-batch.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "admin", component: AdminComponent, children: [
      { path: "admin-dashboard", component: AdminDashboardComponent },
      { path: "course", component: CourseComponent },
      {path:"add-batch",component:AddBatchComponent},
      {path:"add-user",component:AddUserComponent},
      {path:"list-user",component:ListUserComponent},
      {path:'list-student',component:ListStudentComponent},
      {path:"assign-course",component:AssignCourseComponent},
      {path:"list-batch",component:ListBatchComponent},
      {path:'getbatchbyid/:batchid',component:BatchbyidComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
