import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CourseComponent } from './course/course.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { ListBatchComponent } from './list-batch/list-batch.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { AssignCourseComponent } from './assign-course/assign-course.component';
import { BatchbyidComponent } from './batchbyid/batchbyid.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    CourseComponent,
    AdminComponent,
    AddBatchComponent,
    ListBatchComponent,
    AddUserComponent,
    ListUserComponent,
    ListStudentComponent,
    AssignCourseComponent,
    BatchbyidComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
