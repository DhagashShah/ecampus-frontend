import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Courseinterface } from '../courseinterface';
import { DataService } from '../data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Array<any> = [];
  myform: FormGroup;
  courseid = 0;
  coursedata: Courseinterface
  constructor(private route: ActivatedRoute, private service: DataService, private messageService: MessageService, private rut: Router) { }

  ngOnInit() {

    this.courseid = this.route.snapshot.params.courseid;

    this.service.getCourse().then(res => {
      this.course = res.data;
    })
    if (this.courseid) {
      this.service.getCourseById(this.courseid).then(res => {
        this.coursedata = res.data;
        this.myform = new FormGroup({
          courseid: new FormControl(this.coursedata.courseid, Validators.required),
          coursename: new FormControl(this.coursedata.coursename, Validators.required),
          duration: new FormControl(this.coursedata.duration, Validators.required)
        })
      })
    }
    else {
      this.myform = new FormGroup({
        coursename: new FormControl("", Validators.required),
        duration: new FormControl("", Validators.required)
      })
    }



  }
  submit() {
    if(this.courseid)
    {
      if(this.myform.valid)
      {
        this.service.updateCourse(this.myform.value).subscribe(res =>{
          this.messageService.add({ severity: 'info', summary: 'Course Updated', detail: res.msg });
          this.rut.navigateByUrl('/admin/course');
        })
      }
      else
      {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
      }
    }
    else
    {
      if (this.myform.valid) {
        this.service.addCourse(this.myform.value).subscribe(res => {
          this.messageService.add({ severity: 'success', summary: 'Course Added', detail: res.msg });
          this.rut.navigateByUrl('/admin/course');
  
        })
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
  
      }
    }
    

  }

}
