import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';
import { Userinterface } from '../userinterface';

@Component({
  selector: 'app-faculty-getattendance',
  templateUrl: './faculty-getattendance.component.html',
  styleUrls: ['./faculty-getattendance.component.css']
})
export class FacultyGetattendanceComponent implements OnInit {

  
  batchid=0;
  studentBatch:Userinterface;
  myform: FormGroup;
  selectedItems:string[];
  dummyDate:any;
  adate:any;
  constructor(private rut:Router,private messageService: MessageService,private service:DataService,private routes:ActivatedRoute,private fb: FormBuilder,public datepipe : DatePipe) { 
    
  }

  
  ngOnInit()
  {
    this.dummyDate=new Date();
    this.adate = this.datepipe.transform(this.dummyDate,'yyyy-MM-dd');
    console.log(this.adate);
    this.batchid=this.routes.snapshot.params.batchid;
    console.log(this.batchid);

    this.service.getStudentByBatch(this.batchid).then(res =>{
      this.studentBatch=res.data;
    })

    this.selectedItems=new Array<string>();

    this.myform=new FormGroup({
      batchid:new FormControl(this.batchid,Validators.required),
      userid:new FormControl(this.selectedItems,Validators.required),
      adate:new FormControl(this.adate,Validators.required)
    })
    
  }

  getUserId(e:any,id:string)
  {
    if(e.target.checked)
    { 
      console.log(id+'checked....');
      //this.selectedItems = []
      this.selectedItems.push(id);
    }
    else
    {
      console.log(id+'Unchecked....');
      this.selectedItems=this.selectedItems.filter(m=>m!=id);
    }
    console.log(this.selectedItems);
    
  }

  

  submit() 
  { 
    this.myform.value.userid=this.selectedItems;    
    console.log(this.myform.value);
    
    this.service.addAttendance(this.myform.value).subscribe(res =>{
      this.messageService.add({ severity: 'success', summary: 'Attendance Added', detail: res.msg });
      console.log(res);     
    })
    this.rut.navigateByUrl('/faculty/faculty-list-batch');
  }

}


