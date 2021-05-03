import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule, DatePipe } from '@angular/common';  

@Component({
  selector: 'app-faculty-attendance-date',
  templateUrl: './faculty-attendance-date.component.html',
  styleUrls: ['./faculty-attendance-date.component.css']
})
export class FacultyAttendanceDateComponent implements OnInit {

  dates:{};
  batchid=0;
  student:{};
  cdate:any;
  std:{};
  sdata:{};
  absent:{};
  constructor(private service:DataService,private route:ActivatedRoute,public datepipe : DatePipe) { }

  ngOnInit()
  {
    this.batchid=this.route.snapshot.params.batchid;
    this.service.getAttendanceDateByBatch(this.batchid).then(res =>{
      this.dates=res.data;
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
