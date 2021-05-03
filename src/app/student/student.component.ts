import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  userid=0;
  student:Array<any>=[];
  constructor(private service:DataService,private rut:Router) { }

  ngOnInit()
  {
    this.userid=parseInt(sessionStorage.getItem('userid'));
    this.service.getStudentById(this.userid).then(res =>{
      this.student=res.data;
    })
  }

  logout()
  {
    sessionStorage.removeItem("isStudentLogin");
    sessionStorage.removeItem('userid');
    this.rut.navigateByUrl("/");    
  }

}
