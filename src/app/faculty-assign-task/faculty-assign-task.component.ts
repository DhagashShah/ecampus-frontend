import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BatchtaskInterface } from '../batchtask-interface';
import { DataService } from '../data.service';

@Component({
  selector: 'app-faculty-assign-task',
  templateUrl: './faculty-assign-task.component.html',
  styleUrls: ['./faculty-assign-task.component.css']
})
export class FacultyAssignTaskComponent implements OnInit {

  batch: {};
  task: {};
  userid = 0;
  myform: FormGroup;
  dummyDate: any;
  adate: any;
  batchtask: {};
  btid = 0;
  batchTaskData: BatchtaskInterface;
  constructor(private route: ActivatedRoute, private service: DataService, public datepipe: DatePipe, private rut: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.dummyDate = new Date();
    this.adate = this.datepipe.transform(this.dummyDate, 'yyyy-MM-dd');
    this.userid = parseInt(sessionStorage.getItem("userid"));
    this.service.getAllTask(this.userid).then(res => {
      this.task = res.data;
    })

    this.service.getBatchByFaculty(this.userid).then(res => {
      this.batch = res.data;
    })

    this.service.listBatchTaskByFaculty(this.userid).then(res => {
      this.batchtask = res.data;
    })

    this.btid = this.route.snapshot.params.btid;
    if (this.btid) {
      this.service.getBatchTaskById(this.btid).then(res => {
        this.batchTaskData = res.data;
        this.myform = new FormGroup({
          btid: new FormControl(this.batchTaskData.btid, Validators.required),
          taskid:new FormControl(this.batchTaskData.taskid,Validators.required),
          batchid: new FormControl(this.batchTaskData.batchid, Validators.required),
          adate: new FormControl(this.adate, Validators.required),
          sdate: new FormControl(this.batchTaskData.sdate, Validators.required),
          marks: new FormControl(this.batchTaskData.marks,[Validators.required,Validators.minLength(2)]),
          comments: new FormControl(this.batchTaskData.comments,[Validators.required,Validators.minLength(2)])
        })

      })
    }
    else {
      this.myform = new FormGroup({
        taskid: new FormControl("", Validators.required),
        batchid: new FormControl("", Validators.required),
        adate: new FormControl(this.adate, Validators.required),
        sdate: new FormControl("", Validators.required),
        marks: new FormControl("", [Validators.required,Validators.minLength(2)]),
        comments: new FormControl("", [Validators.required,Validators.minLength(2)])
      })
    }


  }
  submit() {
    if (this.btid) {
      if (this.myform.valid) {
          this.service.updateBatchTask(this.myform.value).subscribe(res=>{
          this.messageService.add({ severity: 'info', summary: 'Task Updated', detail: res.msg });
          })
        this.rut.navigateByUrl("/faculty/faculty-assign-task");
      }
      else
      {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
      }
    }
    else {
      if (this.myform.valid) {
        this.service.addBatchTask(this.myform.value).subscribe(res => {
          this.messageService.add({ severity: 'success', summary: 'Task Assigned', detail: res.msg });
        })
        this.rut.navigateByUrl("/faculty/faculty-assign-task");
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
      }
    }
  }

  delete(value)
  {
    this.service.deleteBatchTask(value).subscribe(res =>{
      console.log(res);
    })
  }

}
