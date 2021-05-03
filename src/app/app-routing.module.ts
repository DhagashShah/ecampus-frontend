import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminBatchReportComponent } from './admin-batch-report/admin-batch-report.component';
import { AdminBatchbyStudentComponent } from './admin-batchby-student/admin-batchby-student.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminFeedbackBatchbyidComponent } from './admin-feedback-batchbyid/admin-feedback-batchbyid.component';
import { AdminListFeedbackComponent } from './admin-list-feedback/admin-list-feedback.component';
import { AdminComponent } from './admin/admin.component';
import { AssignCourseComponent } from './assign-course/assign-course.component';
import { AuthGuard } from './auth.guard';
import { BatchbyFacultyComponent } from './batchby-faculty/batchby-faculty.component';
import { BatchbyidComponent } from './batchbyid/batchbyid.component';
import { BockedUsersComponent } from './bocked-users/bocked-users.component';
import { CourseComponent } from './course/course.component';
import { CoursebyidComponent } from './coursebyid/coursebyid.component';
import { EditComplainComponent } from './edit-complain/edit-complain.component';
import { FacultyAddBatchComponent } from './faculty-add-batch/faculty-add-batch.component';
import { FacultyAddNotesComponent } from './faculty-add-notes/faculty-add-notes.component';
import { FacultyAddTaskComponent } from './faculty-add-task/faculty-add-task.component';
import { FacultyAssignTaskComponent } from './faculty-assign-task/faculty-assign-task.component';
import { FacultyAttendanceDateComponent } from './faculty-attendance-date/faculty-attendance-date.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { FacultyGetattendanceComponent } from './faculty-getattendance/faculty-getattendance.component';
import { FacultyGetbatchbyidComponent } from './faculty-getbatchbyid/faculty-getbatchbyid.component';
import { FacultyGetstudentDateComponent } from './faculty-getstudent-date/faculty-getstudent-date.component';
import { FacultyListBatchComponent } from './faculty-list-batch/faculty-list-batch.component';
import { FacultyTaskStudentsComponent } from './faculty-task-students/faculty-task-students.component';
import { FacultyComponent } from './faculty/faculty.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ListBatchComponent } from './list-batch/list-batch.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { PnfComponent } from './pnf/pnf.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { StudentAcceptDoubtComponent } from './student-accept-doubt/student-accept-doubt.component';
import { StudentAddComplainComponent } from './student-add-complain/student-add-complain.component';
import { StudentAddDoubtComponent } from './student-add-doubt/student-add-doubt.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentDoubtbyCourseComponent } from './student-doubtby-course/student-doubtby-course.component';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { StudentGetdoubtbyCourseidComponent } from './student-getdoubtby-courseid/student-getdoubtby-courseid.component';
import { StudentListDoubtComponent } from './student-list-doubt/student-list-doubt.component';
import { StudentListFeedbackComponent } from './student-list-feedback/student-list-feedback.component';
import { StudentSubmitTaskComponent } from './student-submit-task/student-submit-task.component';
import { StudentViewNotesComponent } from './student-view-notes/student-view-notes.component';
import { StudentViewTaskComponent } from './student-view-task/student-view-task.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path:"", component: LoginComponent },
  {path:'forget',component:ForgetPasswordComponent},
  {path:'reset',component:ResetPasswordComponent},
  //{path:'**',component:PnfComponent},
  {
    path: "admin", component: AdminComponent, children: [
      { path: "admin-dashboard", component: AdminDashboardComponent },
      { path: "course", component: CourseComponent },
      {path:'course/edit/:courseid',component:CourseComponent},
      {path:"add-batch",component:AddBatchComponent},
      {path:'add-batch/edit/:batchid',component:AddBatchComponent},
      {path:"add-user",component:AddUserComponent},
      {path:'add-user/edit/:userid',component:AddUserComponent},
      {path:"list-user",component:ListUserComponent},
      {path:'list-student',component:ListStudentComponent},
      {path:"assign-course",component:AssignCourseComponent},
      {path:"list-batch",component:ListBatchComponent},
      {path:'getbatchbyid/:batchid',component:BatchbyidComponent},
      {path:'getcoursebyid/:courseid',component:CoursebyidComponent},
      {path:"admin-list-feedback",component:AdminListFeedbackComponent},
      {path:'admin-feedback-batchbyid/:batchid',component:AdminFeedbackBatchbyidComponent},
      {path:'edit-complain/:cid',component:EditComplainComponent},
      {path:'blocked-users',component:BockedUsersComponent},
      {path:'batchby-faculty/:userid',component:BatchbyFacultyComponent},
      {path:'admin-batch-report/:batchid',component:AdminBatchReportComponent},
      {path:'admin-batchby-student/:userid',component:AdminBatchbyStudentComponent}
    ],canActivate:[AuthGuard]
  },
  {path:'faculty',component:FacultyComponent,children:[
    {path:'faculty-dashboard',component:FacultyDashboardComponent},
    {path:'faculty-add-batch',component:FacultyAddBatchComponent},
    {path:'faculty-add-batch/edit/:batchid',component:FacultyAddBatchComponent},
    {path:'faculty-list-batch',component:FacultyListBatchComponent},
    {path:'faculty-add-notes',component:FacultyAddNotesComponent},
    {path:'faculty-add-notes/edit/:notesid',component:FacultyAddNotesComponent},
    {path:'faculty-getbatchbyid/:batchid',component:FacultyGetbatchbyidComponent},
    {path:'faculty-getattendance/:batchid',component:FacultyGetattendanceComponent},
    {path:'faculty-attendance-date/:batchid',component:FacultyAttendanceDateComponent},
    {path:'faculty-add-task',component:FacultyAddTaskComponent},
    {path:'faculty-add-task/edit/:taskid',component:FacultyAddTaskComponent},
    {path:'faculty-assign-task',component:FacultyAssignTaskComponent},
    {path:'faculty-assign-task/edit/:btid',component:FacultyAssignTaskComponent},
    {path:'faculty-task-students/:btid',component:FacultyTaskStudentsComponent}
  ],canActivate:[AuthGuard]},
  {
    path:'student',component:StudentComponent,children:[
      {path:'student-dashboard',component:StudentDashboardComponent},
      {path:'student-feedback',component:StudentFeedbackComponent},
      {path:'student-list-feedback',component:StudentListFeedbackComponent},
      {path:'student-feedback/edit/:feedbackid',component:StudentFeedbackComponent},
      {path:'student-add-complain',component:StudentAddComplainComponent},
      {path:'student-add-doubt',component:StudentAddDoubtComponent},
      {path:'student-add-doubt/edit/:did',component:StudentAddDoubtComponent},
      {path:'student-list-doubt',component:StudentListDoubtComponent},
      {path:'student-doubtby-course',component:StudentDoubtbyCourseComponent},
      {path:'student-getdoubtby-courseid/:courseid',component:StudentGetdoubtbyCourseidComponent},
      {path:'student-accept-doubt/:did',component:StudentAcceptDoubtComponent},
      {path:'student-view-task/:batchid',component:StudentViewTaskComponent},
      {path:'student-submit-task/:btid',component:StudentSubmitTaskComponent},
      {path:'student-view-notes/:courseid',component:StudentViewNotesComponent}
    ],canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
