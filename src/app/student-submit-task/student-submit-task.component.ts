import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-submit-task',
  templateUrl: './student-submit-task.component.html',
  styleUrls: ['./student-submit-task.component.css']
})
export class StudentSubmitTaskComponent implements OnInit {

  btid=0;
  myform:FormGroup;
  userid=0;
  dummyDate: any;
  sdate: any;
  constructor(private rut: Router,private service:DataService,private route:ActivatedRoute, public datepipe: DatePipe, private messageService: MessageService) { }

  ngOnInit()
  {
    this.dummyDate = new Date();
    this.sdate = this.datepipe.transform(this.dummyDate, 'yyyy-MM-dd');
    this.userid=parseInt(sessionStorage.getItem("userid"));
    this.btid=this.route.snapshot.params.btid;
    this.myform= new FormGroup({
      userid:new FormControl(this.userid,Validators.required),
      btid:new FormControl(this.btid,Validators.required),
      sdate:new FormControl(this.sdate,Validators.required),
      path:new FormControl("",[Validators.required,Validators.minLength(2)]),
      comments:new FormControl("",[Validators.required])
    })
  }
  submit()
  {
    if(this.myform.valid)
    {
      this.service.addStudentTask(this.myform.value).subscribe(res =>{
        this.messageService.add({ severity: 'success', summary: 'Task Submited', detail: res.msg });
      })
      this.rut.navigateByUrl('/student/student-dashboard');
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });

    }
    
    
  }

}
