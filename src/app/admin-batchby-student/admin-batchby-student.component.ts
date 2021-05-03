import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-batchby-student',
  templateUrl: './admin-batchby-student.component.html',
  styleUrls: ['./admin-batchby-student.component.css']
})
export class AdminBatchbyStudentComponent implements OnInit {

  userid=0;
  batch: {};
  constructor(private route:ActivatedRoute,private service:DataService) { }

  ngOnInit(): void {
    this.userid=this.route.snapshot.params.userid;
    this.service.getBatchByStudent(this.userid).then(res => {
      this.batch = res.data;
    })
  }

}
