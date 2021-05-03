import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-faculty-getbatchbyid',
  templateUrl: './faculty-getbatchbyid.component.html',
  styleUrls: ['./faculty-getbatchbyid.component.css']
})
export class FacultyGetbatchbyidComponent implements OnInit {

  batchid=0;
  batch:Array<any>=[];
  studentBatch:{};
  studentCourse:{};
  myform:FormGroup;
  constructor(private service:DataService,private routes:ActivatedRoute,private fb: FormBuilder) { }

  ngOnInit()
  {
    this.batchid=this.routes.snapshot.params.batchid;
    console.log(this.batchid);
    this.service.getBatchById(this.batchid).then(res =>{
      this.batch=res.data;
    })

    this.service.getStudentByBatch(this.batchid).then(res =>{
      this.studentBatch=res.data;
    })

    this.myform=new FormGroup({
      userid:new FormControl("",Validators.required),
      batchid:new FormControl(this.batchid,Validators.required)
    })

    
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
