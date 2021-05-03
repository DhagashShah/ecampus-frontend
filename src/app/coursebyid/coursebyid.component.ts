import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-coursebyid',
  templateUrl: './coursebyid.component.html',
  styleUrls: ['./coursebyid.component.css']
})
export class CoursebyidComponent implements OnInit {

  courseid=0;
  course:Array<any>=[];
  students:{};
  studentcourse:{};
  myform:FormGroup;
  constructor(private service:DataService,private route:ActivatedRoute) { }

  ngOnInit()
  {
    this.courseid=this.route.snapshot.params.courseid;
    console.log(this.courseid);
    this.service.getCourseById(this.courseid).then(res =>{
      this.course=res.data;
    })
    console.log(this.course);
    
    this.myform=new FormGroup({
      userid:new FormControl("",Validators.required),
      courseid:new FormControl(this.courseid,Validators.required)
    })

    this.service.getStudentByCourse(this.courseid).then(res=>{
      this.studentcourse=res.data;
    })
    
    
  }

  submit()
  {
    this.service.assignStudentCourse(this.myform.value).subscribe(res =>{
      console.log(this.myform.value);
      
    })
  }

  add(value)
  {
    this.service.getStudentNotInAnyCourse(value).then(res =>{
      this.students=res.data;
    })
  }

}
