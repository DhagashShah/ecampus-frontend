import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  totalfaculty:{};
  totalstudent:{};
  totalcourse:{};
  totalbatch:{};
  course: Array<any> = [];
  batch: {};
  userid=0;
  constructor(private service:DataService) { }

  ngOnInit() 
  {
    this.userid=parseInt(sessionStorage.getItem('userid'));
    this.service.getTotalFaculty().then(res =>{
      this.totalfaculty=res.data;
    })

     this.service.getBatchByStudent(this.userid).then(res => {
      this.batch = res.data;
    })

    this.service.getTotalStudent().then(res =>{
      this.totalstudent=res.data;
    })

    this.service.getTotalBatch().then(res =>{
      this.totalbatch=res.data;
    })

    this.service.getTotalCourse().then(res =>{
      this.totalcourse=res.data;
    })

    this.service.getCourseByStudent(this.userid).then(res => {
      this.course = res.data;
    })
  }

}
