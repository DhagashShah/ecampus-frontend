import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmitterVisitorContext } from '@angular/compiler';
import { Ptor } from 'protractor';
import { notDeepEqual } from 'node:assert';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getCourse():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}listcourse`).toPromise();
  }

  addCourse(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}addcourse`,model);
  }

  getRole():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}roles`).toPromise();
  }

  loginuser(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}authenticate`,model);
  }

  addUser(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}signup`,model);
  }

  listUser():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}listusers`).toPromise();
  }

  listFaculty():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}listfaculty`).toPromise();
  }

  listStudent():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}liststudent`).toPromise();
  }

  addBatch(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}addbatch`,model);
  }

  getbatch():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}allbatch`).toPromise();
  }

  getBatchById(batchid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getbatchbyid/${batchid}`).toPromise();
  }

  getCourseById(courseid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getcoursebyid/${courseid}`).toPromise();
  }

  assignStudentCourse(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}assigncourse`,model);
  }

  assignBatch(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}assignbatch`,model);
  }

  addAttendance(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}addattendance`,model);
  }

  getStudentByCourse(courseid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getstudentbycourse/${courseid}`).toPromise();
  }

  getStudentByBatch(batchid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getstudentbybatch/${batchid}`).toPromise();
  }

  getStudentNotInAnyCourse(courseid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getStudentNotInAnyCourse/${courseid}`).toPromise();
  }

  getStudentNotInAnyBatch(courseid:number,batchid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getStudentNotInAnyBatch/${courseid}/${batchid}`).toPromise();
  }

  getStudentByDate(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}getStudentByDate`,model);
  }

  getAbsentStudentByDate(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}getAbsentStudentByDate`,model);
  }

  deleteStudentByBatch(userid:number,batchid:number):Observable<any>
  {
    return this.http.delete(`${environment.Base_URL}deletebatchstudent/${userid}/${batchid}`);
  }

  getFacultyById(userid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getfacultybyid/${userid}`).toPromise();
  }

  getStudentById(userid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getstudentbyid/${userid}`).toPromise();
  }

  getBatchByFaculty(userid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getbatchbyfaculty/${userid}`).toPromise();
  }

  getBatchByStudent(userid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getbatchbystudent/${userid}`).toPromise();
  }

  addfeedback(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}addfeedback`,model);
  }

  getfeedback(userid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}listfeedback/${userid}`).toPromise();
  }

  getfeedbackbyid(feedbackid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getfeedbackbyid/${feedbackid}`).toPromise();
  }

  updatefeedback(model:any):Observable<any>
  {
    return this.http.put(`${environment.Base_URL}updatefeedback`,model);
  }

  deletefeedback(feedbackid:number):Observable<any>
  {
    return this.http.delete(`${environment.Base_URL}deletefeedback/${feedbackid}`);
  }

  getFeedbackAdmin(batchid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}listfeedbackadmin/${batchid}`).toPromise();
  }

  addComplain(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}addcomplain`,model);
  }

  getComplainByStudent(userid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getcomplainbystudent/${userid}`).toPromise();
  }

  getallcomplain():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getallcomplain`).toPromise();
  }

  getcomplainbyid(cid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getcomplainbyid/${cid}`).toPromise();
  }

  updatecomplain(model:any):Observable<any>
  {
    return this.http.put(`${environment.Base_URL}updatecomplain`,model);
  }

  getresolvecomplain(userid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getresolvecomplain/${userid}`).toPromise();
  }

  updatestudent(model:any):Observable<any>
  {
    return this.http.put(`${environment.Base_URL}updateuser`,model);
  }

  updatebatch(model:any):Observable<any>
  {
    return this.http.put(`${environment.Base_URL}updatebatch`,model);
  }

  getblockedstudents():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getblockedstudents`).toPromise();
  }

  getblockedfaculty():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getblockedfaculty`).toPromise();
  }

  getTotalFaculty():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}totalfaculty`).toPromise();
  }

  getTotalStudent():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}totalstudent`).toPromise();
  }

  getTotalBatch():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}totalbatch`).toPromise();
  }

  getTotalCourse():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}totalcourse`).toPromise();
  }

  addNotes(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}savenotes`,model);
  }

  getAttendanceDateByBatch(batchid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getAttendanceDateByBatch/${batchid}`).toPromise();
  }

  getCourseByStudent(userid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getStudentByCourse/${userid}`).toPromise();
  }

  addDoubt(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}adddoubt`,model);
  }

  getDoubtByStudent(sid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}alldoubt/${sid}`).toPromise();
  }

  getDoubtByCourse(courseid:number,userid:number):Promise<any>
  {
    
    return this.http.get(`${environment.Base_URL}getdoubtbycourse/${courseid}/${userid}`).toPromise();
  }

  getDoubtById(did:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getDoubtById/${did}`).toPromise();
  }

  updateDoubt(model:any):Observable<any>
  {
    return this.http.put(`${environment.Base_URL}updateDoubt`,model);
  }

  getNotAcceptedDubtByStudent(sid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getNotAceeptedDoubtByStudent/${sid}`).toPromise();
  }

  updateNotAcceptedDoubt(model:any):Observable<any>
  {
    return this.http.put(`${environment.Base_URL}updateNotAcceptedDoubt`,model);
  }

  deleteDoubt(did:number):Observable<any>
  {
    return this.http.delete(`${environment.Base_URL}deletedoubt/${did}`);
  }

  updateCourse(model:any):Observable<any>
  {
    return this.http.put(`${environment.Base_URL}updatecourse`,model);
  }

  getForgetPassword(email:any):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}resetpassword/${email}`).toPromise();
  }

  getAllDoubts():Promise<any>
  {
    return this.http.get(`${environment.Base_URL}alldoubts`).toPromise();
  }

  getNotesByUser(userid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getnotesbyuserid/${userid}`).toPromise();
  }

  deleteNotes(notesid:number):Observable<any>
  {
    return this.http.delete(`${environment.Base_URL}deletenotes/${notesid}`);
  }

  updateNotes(model:any):Observable<any>
  {
    return this.http.put(`${environment.Base_URL}updatenotes`,model);
  }

  getNotesById(notesid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getnotesbyid/${notesid}`).toPromise();
  }

  addTask(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}addtask`,model);
  }

  getTaskByUser(userid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getNotAssignedTaskByUser/${userid}`).toPromise();
  }

  getAssignedTaskByUser(userid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getAssignedTaskByUser/${userid}`).toPromise();
  }

  getAllTask(userid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getAllTask/${userid}`).toPromise();
  }

  getTaskById(taskid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getTaskById/${taskid}`).toPromise();
  }

  updateTask(model:any):Observable<any>
  {
    return this.http.put(`${environment.Base_URL}updateTask`,model);
  }

  deleteTask(taskid:number):Observable<any>
  {
    return this.http.delete(`${environment.Base_URL}deleteTask/${taskid}`);
  }

  addBatchTask(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}addbatchtask`,model);
  }

  listBatchTaskByFaculty(userid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}listbatchtaskbyfaculty/${userid}`).toPromise();
  }

  getBatchTaskById(btid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getbatchtaskbyid/${btid}`).toPromise();
  }

  updateBatchTask(model:any):Observable<any>
  {
    return this.http.put(`${environment.Base_URL}updateBatchTask`,model);
  }

  deleteBatchTask(btid:number):Observable<any>
  {
    return this.http.delete(`${environment.Base_URL}deleteBatchTask/${btid}`);
  }

  getAcceptedDoubts(cid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getAcceptedDoubts/${cid}`).toPromise();
  }

  getBatchTaskByBatch(batchid:number,userid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getSubmittedTask/${batchid}/${userid}`).toPromise();
  }

  addStudentTask(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}addStudentTask`,model);
  }

  getNotSubmittedTask(batchid:number,userid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getNotSubmittedTask/${batchid}/${userid}`).toPromise();
  }

  getStudentTaskById(stid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getStudentTaskById/${stid}`).toPromise();
  }

  getSubmittedTaskByBatch(btid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getSubmittedTaskByBatch/${btid}`).toPromise();
  }

  getNotSubmittedTaskByBatch(btid:number,btid1:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getNotSubmittedTaskByBatch/${btid}/${btid1}`).toPromise();
  }

  getNotesByCourse(courseid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getNotesByCourse/${courseid}`).toPromise();
  }

  getTotalSessions(batchid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getTotalSessions/${batchid}`).toPromise();
  }

  setnewpassword(data:any):Observable<any>{
    return this.http.get(`${environment.Base_URL}setnewpassword/`+data.email+"/"+data.password+"/"+data.otp);
    }


  
}
