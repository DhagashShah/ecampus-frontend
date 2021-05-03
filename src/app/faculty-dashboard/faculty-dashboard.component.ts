import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {

  totalfaculty:{};
  totalstudent:{};
  totalcourse:{};
  totalbatch:{};
  constructor(private service:DataService) { }

  ngOnInit(): void 
  {
    this.service.getTotalFaculty().then(res =>{
      this.totalfaculty=res.data;
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
  }

}
