import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { DataService } from '../data.service';

@Component({
  selector: 'app-batchbyid',
  templateUrl: './batchbyid.component.html',
  styleUrls: ['./batchbyid.component.css']
})
export class BatchbyidComponent implements OnInit {

  batchid = 0;
  batch: Array<any> = [];
  studentCourse: {};
  studentBatch: {};
  myform: FormGroup;
  value1 = 0;
  constructor(private service: DataService, private routes: ActivatedRoute, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit() {


    console.log(this.routes);
    this.batchid = this.routes.snapshot.params.batchid;
    console.log(this.batchid);
    this.service.getBatchById(this.batchid).then(res => {
      this.batch = res.data;
    })
    this.service.getStudentByBatch(this.batchid).then(res => {
      this.studentBatch = res.data;
    })

    console.log(this.batch);

    this.myform = new FormGroup({
      userid: new FormControl("", Validators.required),
      batchid: new FormControl(this.batchid, Validators.required)
    })



    // this.myform1=new FormGroup({
    //   userid:new FormControl("",Validators.required),
    //   batchid:new FormControl(this.batchid,Validators.required)
    // })

  }



  submit() {
    console.log(this.myform.value);
    this.service.assignBatch(this.myform.value).subscribe(res => {
      console.log(res);

    })
  }


  add(value, value1) {
    this.service.getStudentNotInAnyBatch(value, value1).then(res => {
      this.studentCourse = res.data;
    })

  }

  delete(value) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.service.deleteStudentByBatch(value, this.value1).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });

        })

      },
      reject: (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    });

  }

}
