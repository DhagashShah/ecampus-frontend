import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Batchinterface } from '../batchinterface';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css']
})
export class AddBatchComponent implements OnInit {

  faculty: {};
  course: {};
  myform: FormGroup;
  batchid = 0;
  batch: Batchinterface;
  constructor(private service: DataService, private route: ActivatedRoute, private rut: Router, private messageService: MessageService) { }

  async ngOnInit() {
    this.batchid = this.route.snapshot.params.batchid;
    console.log(this.batchid);

    await this.service.listFaculty().then(res => {
      this.faculty = res.data;
      console.log(this.faculty);
    });

    await this.service.getCourse().then(res => {
      this.course = res.data;
      console.log(this.course);

    })


    if (this.batchid) {

      this.service.getBatchById(this.batchid).then(res => {
        this.batch = res.data;
        this.myform = new FormGroup({
          batchid: new FormControl(this.batch.batchid, Validators.required),
          userid: new FormControl(this.batch.userid, Validators.required),
          courseid: new FormControl(this.batch.courseid, Validators.required),
          name: new FormControl(this.batch.name, Validators.required),
          duration: new FormControl(this.batch.duration, Validators.required),
          descr: new FormControl(this.batch.descr, Validators.required),
          time: new FormControl(this.batch.time, Validators.required),
          startdate: new FormControl(this.batch.startdate, Validators.required),
          enddate: new FormControl(this.batch.enddate, Validators.required),
          isfinish: new FormControl(this.batch.isfinish, Validators.required)
        })
      })

    }
    else {
      this.myform = new FormGroup({
        userid: new FormControl("", Validators.required),
        courseid: new FormControl("", Validators.required),
        name: new FormControl("", Validators.required),
        duration: new FormControl("", Validators.required),
        descr: new FormControl("", Validators.required),
        time: new FormControl("", Validators.required),
        startdate: new FormControl(new Date, Validators.required),
        enddate: new FormControl(new Date, Validators.required),
        isfinish: new FormControl("", Validators.required)
      })
    }

  }

  submit() {

    if (this.batchid) {
      if (this.myform.valid) {
        this.service.updatebatch(this.myform.value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Batch Updated', detail: res.msg });
        })
        this.rut.navigateByUrl("/admin/list-batch");
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });

      }

    }
    else {
      if (this.myform.valid) {
        this.service.addBatch(this.myform.value).subscribe(res => {
          this.messageService.add({ severity: 'success', summary: 'Batch Added', detail: res.msg });
        })
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });

      }

    }

  }

}
