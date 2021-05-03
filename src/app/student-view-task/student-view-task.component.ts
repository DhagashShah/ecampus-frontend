import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-view-task',
  templateUrl: './student-view-task.component.html',
  styleUrls: ['./student-view-task.component.css']
})
export class StudentViewTaskComponent implements OnInit {

  batchid = 0;
  batchtask: {};
  notSubmitted: {};
  userid = 0;
  details:Array<any>=[];
  constructor(private service: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.batchid = this.route.snapshot.params.batchid;
    this.userid = parseInt(sessionStorage.getItem("userid"));
    this.service.getBatchTaskByBatch(this.batchid, this.userid).then(res => {
      this.batchtask = res.data;
    })
    this.service.getNotSubmittedTask(this.batchid, this.userid).then(res => {
      this.notSubmitted = res.data;
    })

  }
  view(value) {
   this.service.getStudentTaskById(value).then(res =>{
     this.details=res.data;
   })
  }

}
