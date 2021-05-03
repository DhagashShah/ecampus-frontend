import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-doubtby-course',
  templateUrl: './student-doubtby-course.component.html',
  styleUrls: ['./student-doubtby-course.component.css']
})
export class StudentDoubtbyCourseComponent implements OnInit {

  course: Array<any> = [];
  userid=0;
  constructor(private service:DataService) { }

  ngOnInit()
  {
    this.userid=parseInt(sessionStorage.getItem("userid"));
    this.service.getCourseByStudent(this.userid).then(res => {
      this.course = res.data;
    })
  }

}
