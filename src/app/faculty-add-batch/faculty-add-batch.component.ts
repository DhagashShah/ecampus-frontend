import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Batchinterface } from '../batchinterface';
import { DataService } from '../data.service';

@Component({
  selector: 'app-faculty-add-batch',
  templateUrl: './faculty-add-batch.component.html',
  styleUrls: ['./faculty-add-batch.component.css']
})
export class FacultyAddBatchComponent implements OnInit {


  course: {};
  myform: FormGroup;
  userid = 0;
  batchid = 0;
  batchdata: Batchinterface;
  isFinish:boolean=false;
  constructor(private service: DataService, private route: ActivatedRoute, private rut: Router, private messageService: MessageService) { }

  async ngOnInit() {

    this.batchid = this.route.snapshot.params.batchid;
    this.userid = parseInt(sessionStorage.getItem('userid'));
    await this.service.getCourse().then(res => {
      this.course = res.data;
    })

    if (this.batchid) {

      this.service.getBatchById(this.batchid).then(res => {
        this.batchdata = res.data;
        this.myform = new FormGroup({
          batchid: new FormControl(this.batchdata.batchid, Validators.required),
          userid: new FormControl(this.batchdata.userid, Validators.required),
          courseid: new FormControl(this.batchdata.courseid, Validators.required),
          name: new FormControl(this.batchdata.name, Validators.required),
          duration: new FormControl(this.batchdata.duration, Validators.required),
          descr: new FormControl(this.batchdata.descr, Validators.required),
          time: new FormControl(this.batchdata.time, Validators.required),
          startdate: new FormControl(this.batchdata.startdate, Validators.required),
          enddate: new FormControl(this.batchdata.enddate, Validators.required),
          isfinish: new FormControl(this.batchdata.isfinish, Validators.required)
        })
      })

    }
    else {
      this.myform = new FormGroup({
        userid: new FormControl(this.userid, Validators.required),
        courseid: new FormControl("", Validators.required),
        name: new FormControl("", Validators.required),
        duration: new FormControl("", Validators.required),
        descr: new FormControl("", Validators.required),
        time: new FormControl("", Validators.required),
        startdate: new FormControl(new Date, Validators.required),
        enddate: new FormControl(new Date, Validators.required),
        isfinish: new FormControl(this.isFinish, Validators.required)
      })
    }

  }

  submit() {
    if (this.batchid) {
      if (this.myform.valid) {
        this.service.updatebatch(this.myform.value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Batch Updated', detail: res.msg });
          this.rut.navigateByUrl("/faculty/faculty-list-batch");
        })
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
