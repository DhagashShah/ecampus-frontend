import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-batchbyid',
  templateUrl: './batchbyid.component.html',
  styleUrls: ['./batchbyid.component.css']
})
export class BatchbyidComponent implements OnInit {

  batchid=0;
  batch:Array<any>=[];
  studentCourse:{};
  studentBatch:{};
  myform:FormGroup;
  constructor(private service:DataService,private routes:ActivatedRoute) { }

   ngOnInit()
  {

    
    console.log(this.routes);
    this.batchid=this.routes.snapshot.params.batchid;
    console.log(this.batchid);
     this.service.getBatchById(this.batchid).then(res =>{
      this.batch=res.data;
    })
    this.service.getStudentByBatch(this.batchid).then(res =>{
      this.studentBatch=res.data;
    })

    console.log(this.batch);
    
    this.myform=new FormGroup({
      userid:new FormControl("",Validators.required),
      batchid:new FormControl(this.batchid,Validators.required)
    })

    

    // this.myform1=new FormGroup({
    //   userid:new FormControl("",Validators.required),
    //   batchid:new FormControl(this.batchid,Validators.required)
    // })
    
  }

  

  submit()
  {
    console.log(this.myform.value);
    this.service.assignBatch(this.myform.value).subscribe(res =>{
      console.log(res);
      
    }) 
  }

  
  add(value,value1)
  {
    this.service.getStudentNotInAnyBatch(value,value1).then(res =>{
      this.studentCourse=res.data;      
    })
    
  }

  delete(value)
  {
    this.service.deleteStudentByBatch(value).subscribe(res =>{
      console.log("Student Deleted....");
      
    })
  }

}
