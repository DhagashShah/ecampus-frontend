import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  faculty:Array<any>=[];
  userid=0;
  constructor(private service:DataService,private rut:Router) { }

  ngOnInit()
  {
    this.userid=parseInt(sessionStorage.getItem('userid'));
    console.log(this.userid);
    this.service.getFacultyById(this.userid).then(res =>{
      this.faculty=res.data;
      console.log(res);
      
    })
    
  }

  logout()
  {
    sessionStorage.removeItem("isFacultyLogin");
    sessionStorage.removeItem('userid');
    this.rut.navigateByUrl('/');
  }

}
