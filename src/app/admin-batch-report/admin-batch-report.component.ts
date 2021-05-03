import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-batch-report',
  templateUrl: './admin-batch-report.component.html',
  styleUrls: ['./admin-batch-report.component.css']
})
export class AdminBatchReportComponent implements OnInit {

  dates:{};
  batchid=0;
  student:{};
  cdate:any;
  std:{};
  sdata:{};
  absent:{};
  count:{};
  constructor(private service:DataService,private route:ActivatedRoute,public datepipe : DatePipe) { }

  ngOnInit()
  {
    this.batchid=this.route.snapshot.params.batchid;
    this.service.getAttendanceDateByBatch(this.batchid).then(res =>{
      this.dates=res.data;
    })

    this.service.getTotalSessions(this.batchid).then(res =>{
      this.count=res.data;
    })
  }
  add(value,value1)
  {
    this.cdate = this.datepipe.transform(value,'yyyy-MM-dd');
    this.std={"adate" : this.cdate,"batchid" : value1}
    this.sdata={"batchid":value1,"adate":this.cdate,"adate1":this.cdate}
    this.service.getStudentByDate(this.std).subscribe(res =>{
      this.student=res.data;      
    })
    
    this.service.getAbsentStudentByDate(this.sdata).subscribe(res =>{
      this.absent=res.data;
      console.log(this.absent);
    })
  }

}
