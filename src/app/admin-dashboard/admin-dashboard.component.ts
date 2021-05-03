import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  complain:{};
  myform:FormGroup;
  dummyDate:any;
  rdate:any;
  totalfaculty:{};
  totalstudent:{};
  totalcourse:{};
  totalbatch:{};
  constructor(private service:DataService,public datepipe : DatePipe) { }

  ngOnInit()
  {
    this.dummyDate=new Date();
    this.rdate = this.datepipe.transform(this.dummyDate,'yyyy-MM-dd');
    this.service.getallcomplain().then(res =>{
      this.complain=res.data;
    })

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

    this.myform=new FormGroup({
      cid:new FormControl("",Validators.required),
      isresolve:new FormControl("",Validators.required),
      rdate:new FormControl(this.rdate,Validators.required)
    })
  }
  
  submit()
  {
    console.log(this.myform.value);
    this.service.updatecomplain(this.myform.value).subscribe(res =>{
      
    })
    
  }

}
