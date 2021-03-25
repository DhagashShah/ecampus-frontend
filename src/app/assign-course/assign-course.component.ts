import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-assign-course',
  templateUrl: './assign-course.component.html',
  styleUrls: ['./assign-course.component.css']
})
export class AssignCourseComponent implements OnInit {

  student:{};
  course:{};
  myform:FormGroup;
  constructor(private service:DataService) { }

  ngOnInit()
  {
    this.service.listStudent().then(res =>{
      this.student=res.data;
    })

    this.service.getCourse().then(res =>{
      this.course=res.data;
    })

    this.myform=new FormGroup({
      userid:new FormControl("",Validators.required),
      courseid:new FormControl("",Validators.required)
    })
  }
  submit()
  {
    console.log(this.myform.value);
    
    this.service.assignStudentCourse(this.myform.value).subscribe(res =>{
      console.log(res);
      
    })
  }

}
