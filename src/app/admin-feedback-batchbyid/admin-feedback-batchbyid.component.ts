import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-feedback-batchbyid',
  templateUrl: './admin-feedback-batchbyid.component.html',
  styleUrls: ['./admin-feedback-batchbyid.component.css']
})
export class AdminFeedbackBatchbyidComponent implements OnInit {

  batchid=0;
  batch:Array<any>=[];
  studentBatch:{};
  constructor(private service:DataService,private routes:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.routes);
    this.batchid=this.routes.snapshot.params.batchid;
    console.log(this.batchid);
     this.service.getBatchById(this.batchid).then(res =>{
      this.batch=res.data;
    })

    this.service.getFeedbackAdmin(this.batchid).then(res =>{
      this.studentBatch=res.data;
    })
  }

}
