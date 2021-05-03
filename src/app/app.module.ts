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
import { CoursebyidComponent } from './coursebyid/coursebyid.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { FacultyAddBatchComponent } from './faculty-add-batch/faculty-add-batch.component';
import { FacultyListBatchComponent } from './faculty-list-batch/faculty-list-batch.component';
import { FacultyAddNotesComponent } from './faculty-add-notes/faculty-add-notes.component';
import { AlifeFileToBase64Module} from 'alife-file-to-base64';
import { from } from 'rxjs';
import { FacultyGetbatchbyidComponent } from './faculty-getbatchbyid/faculty-getbatchbyid.component';
import { FacultyGetattendanceComponent } from './faculty-getattendance/faculty-getattendance.component';
import { StudentComponent } from './student/student.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { StudentListFeedbackComponent } from './student-list-feedback/student-list-feedback.component';
import { AdminListFeedbackComponent } from './admin-list-feedback/admin-list-feedback.component';
import { AdminFeedbackBatchbyidComponent } from './admin-feedback-batchbyid/admin-feedback-batchbyid.component';
import { StudentAddComplainComponent } from './student-add-complain/student-add-complain.component';
import { DatePipe } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { EditComplainComponent } from './edit-complain/edit-complain.component';
import { BockedUsersComponent } from './bocked-users/bocked-users.component';
import { BatchbyFacultyComponent } from './batchby-faculty/batchby-faculty.component';
import { FacultyAttendanceDateComponent } from './faculty-attendance-date/faculty-attendance-date.component';
import { FacultyGetstudentDateComponent } from './faculty-getstudent-date/faculty-getstudent-date.component';
import { CommonModule } from '@angular/common';
import { StudentAddDoubtComponent } from './student-add-doubt/student-add-doubt.component';
import { StudentListDoubtComponent } from './student-list-doubt/student-list-doubt.component';
import { StudentDoubtbyCourseComponent } from './student-doubtby-course/student-doubtby-course.component';
import { StudentGetdoubtbyCourseidComponent } from './student-getdoubtby-courseid/student-getdoubtby-courseid.component';
import { StudentAcceptDoubtComponent } from './student-accept-doubt/student-accept-doubt.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FacultyAddTaskComponent } from './faculty-add-task/faculty-add-task.component';
import { FacultyAssignTaskComponent } from './faculty-assign-task/faculty-assign-task.component';
import { StudentViewTaskComponent } from './student-view-task/student-view-task.component';
import { StudentSubmitTaskComponent } from './student-submit-task/student-submit-task.component';
import { FacultyTaskStudentsComponent } from './faculty-task-students/faculty-task-students.component';
import { StudentViewNotesComponent } from './student-view-notes/student-view-notes.component';
import { AdminBatchReportComponent } from './admin-batch-report/admin-batch-report.component';
import { AdminBatchbyStudentComponent } from './admin-batchby-student/admin-batchby-student.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PnfComponent } from './pnf/pnf.component';  

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
    BatchbyidComponent,
    CoursebyidComponent,
    FacultyComponent,
    FacultyDashboardComponent,
    FacultyAddBatchComponent,
    FacultyListBatchComponent,
    FacultyAddNotesComponent,
    FacultyGetbatchbyidComponent,
    FacultyGetattendanceComponent,
    StudentComponent,
    StudentDashboardComponent,
    StudentFeedbackComponent,
    StudentListFeedbackComponent,
    AdminListFeedbackComponent,
    AdminFeedbackBatchbyidComponent,
    StudentAddComplainComponent,
    EditComplainComponent,
    BockedUsersComponent,
    BatchbyFacultyComponent,
    FacultyAttendanceDateComponent,
    FacultyGetstudentDateComponent,
    StudentAddDoubtComponent,
    StudentListDoubtComponent,
    StudentDoubtbyCourseComponent,
    StudentGetdoubtbyCourseidComponent,
    StudentAcceptDoubtComponent,
    ForgetPasswordComponent,
    FacultyAddTaskComponent,
    FacultyAssignTaskComponent,
    StudentViewTaskComponent,
    StudentSubmitTaskComponent,
    FacultyTaskStudentsComponent,
    StudentViewNotesComponent,
    AdminBatchReportComponent,
    AdminBatchbyStudentComponent,
    ResetPasswordComponent,
    PnfComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AlifeFileToBase64Module,
    ToastModule,
    ButtonModule,
    ConfirmDialogModule

  ],
  providers: [DatePipe,MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
