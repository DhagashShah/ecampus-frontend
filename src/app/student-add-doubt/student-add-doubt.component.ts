import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';
import { DoubtInterface } from '../doubt-interface';

@Component({
  selector: 'app-student-add-doubt',
  templateUrl: './student-add-doubt.component.html',
  styleUrls: ['./student-add-doubt.component.css']
})
export class StudentAddDoubtComponent implements OnInit {

  myform: FormGroup;
  course: Array<any> = [];
  userid = 0;
  dummyDate: any;
  cdate: any;
  accepted: boolean = false;
  did = 0;
  doubt: DoubtInterface;
  constructor(private route: ActivatedRoute, private service: DataService, public datepipe: DatePipe, private messageService: MessageService, private rut: Router) { }

  ngOnInit(): void {

    this.dummyDate = new Date();
    this.cdate = this.datepipe.transform(this.dummyDate, "yyyy-MM-dd");
    this.userid = parseInt(sessionStorage.getItem('userid'));
    this.service.getCourseByStudent(this.userid).then(res => {
      this.course = res.data;
    })
    this.did = this.route.snapshot.params.did;
    if (this.did) {
      this.service.getDoubtById(this.did).then(res => {
        this.doubt = res.data;
        this.myform = new FormGroup({
          did: new FormControl(this.doubt.did, Validators.required),
          sid: new FormControl(this.doubt.sid, Validators.required),
          cid: new FormControl(this.doubt.cid, Validators.required),
          detail: new FormControl(this.doubt.detail,[Validators.required,Validators.minLength(2)]),
          cdate: new FormControl(this.cdate, Validators.required),
          accepted: new FormControl(this.accepted, Validators.required)
        })
      })
    }
    else {
      this.myform = new FormGroup({
        sid: new FormControl(this.userid, Validators.required),
        cid: new FormControl("", Validators.required),
        detail: new FormControl("", [Validators.required,Validators.minLength(2)]),
        cdate: new FormControl(this.cdate, Validators.required),
        accepted: new FormControl(this.accepted, Validators.required)
      })
    }

  }
  submit() {
    if (this.did) {
      if (this.myform.valid) {
        this.service.updateNotAcceptedDoubt(this.myform.value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Doubt Updated', detail: res.msg });
          this.rut.navigateByUrl('/student/student-list-doubt');
        })
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
      }
    }
    else {
      if (this.myform.valid) {
        this.service.addDoubt(this.myform.value).subscribe(res => {
          this.messageService.add({ severity: 'success', summary: 'Doubt Created', detail: res.msg });
          this.rut.navigateByUrl('/student/student-list-doubt');
        })
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
      }
    }

  }

}
