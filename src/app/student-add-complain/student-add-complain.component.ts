import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-add-complain',
  templateUrl: './student-add-complain.component.html',
  styleUrls: ['./student-add-complain.component.css']
})
export class StudentAddComplainComponent implements OnInit {

  myform: FormGroup;
  userid = 0;
  dummyDate: any;
  cdate: any;
  resolve: boolean = false;
  complain: Array<any> = [];
  resolvecomplain: {};
  constructor(private service: DataService, public datepipe: DatePipe, private messageService: MessageService) { }

  ngOnInit() {
    this.dummyDate = new Date();
    this.cdate = this.datepipe.transform(this.dummyDate, 'yyyy-MM-dd');
    console.log(this.cdate);

    this.userid = parseInt(sessionStorage.getItem("userid"));

    this.myform = new FormGroup({
      sid: new FormControl(this.userid, Validators.required),
      complain: new FormControl("", [Validators.required,Validators.minLength(2)]),
      isresolve: new FormControl(this.resolve, Validators.required),
      cdate: new FormControl(this.cdate, Validators.required)
    })

    this.service.getComplainByStudent(this.userid).then(res => {
      this.complain = res.data;
    })

    this.service.getresolvecomplain(this.userid).then(res => {
      this.resolvecomplain = res.data;
    })
  }
  submit() {
    if (this.myform.valid) {
      this.service.addComplain(this.myform.value).subscribe(res => {
        this.messageService.add({ severity: 'success', summary: 'Complain Created', detail: res.msg });

      })
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });

    }

  }

}
