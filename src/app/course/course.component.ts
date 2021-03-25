import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course:Array<any>=[];
  myform:FormGroup;
  constructor(private service:DataService) { }

  ngOnInit() 
  {
    this.myform=new FormGroup({
      coursename:new FormControl("",Validators.required),
      duration:new FormControl("",Validators.required)
    })
     this.service.getCourse().then(res =>{
      this.course=res.data;
    })
    console.log(this.course);
    
  }
  submit()
  {
    this.service.addCourse(this.myform.value).subscribe(res =>{
      console.log(res);
      
    })
  }

}
