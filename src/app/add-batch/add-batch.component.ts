import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css']
})
export class AddBatchComponent implements OnInit {

  faculty:{};
  course:{};
  myform:FormGroup;
  constructor(private service:DataService) { }

  async ngOnInit()
  {
    await this.service.listFaculty().then(res =>{
      this.faculty=res.data;
      console.log(this.faculty);
    });

    await this.service.getCourse().then(res =>{
      this.course=res.data;
      console.log(this.course);
      
    })
    this.myform=new FormGroup({
      userid:new FormControl("",Validators.required),
      courseid:new FormControl("",Validators.required),
      name:new FormControl("",Validators.required),
      duration:new FormControl("",Validators.required),
      descr:new FormControl("",Validators.required),
      time:new FormControl("",Validators.required),
      startdate:new FormControl(new Date,Validators.required),
      enddate:new FormControl(new Date,Validators.required),
      isfinish : new FormControl("",Validators.required)
    })
  }

  submit()
  {
    console.log(this.myform.value);
    
    this.service.addBatch(this.myform.value).subscribe(res =>{
      console.log(res);
      
    })
  }

}
