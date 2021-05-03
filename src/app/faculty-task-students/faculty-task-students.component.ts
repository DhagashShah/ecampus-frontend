import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-faculty-task-students',
  templateUrl: './faculty-task-students.component.html',
  styleUrls: ['./faculty-task-students.component.css']
})
export class FacultyTaskStudentsComponent implements OnInit {

  btid = 0;
  submitted: {};
  btid1=0;
  notSubmitted:{};
  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit(): void {
    this.btid = this.route.snapshot.params.btid;
    console.log(this.btid);
    this.btid1=this.btid;
    this.service.getSubmittedTaskByBatch(this.btid).then(res => {
      this.submitted = res.data;
      console.log(res);
    })
    this.service.getNotSubmittedTaskByBatch(this.btid,this.btid1).then(res =>{
      this.notSubmitted=res.data;
    })

  }

}
