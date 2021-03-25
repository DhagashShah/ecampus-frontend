import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


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

  assignStudentCourse(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}assigncourse`,model);
  }

  assignBatch(model:any):Observable<any>
  {
    return this.http.post(`${environment.Base_URL}assignbatch`,model);
  }

  getStudentByCourse(courseid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getstudentbycourse/${courseid}`).toPromise();
  }

  getStudentByBatch(batchid:number):Promise<any>
  {
    return this.http.get(`${environment.Base_URL}getstudentbybatch/${batchid}`).toPromise();
  }
}
