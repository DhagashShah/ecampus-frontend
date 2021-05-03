import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';
import { DoubtInterface } from '../doubt-interface';

@Component({
  selector: 'app-student-accept-doubt',
  templateUrl: './student-accept-doubt.component.html',
  styleUrls: ['./student-accept-doubt.component.css']
})
export class StudentAcceptDoubtComponent implements OnInit {

  myform: FormGroup;
  did = 0;
  doubt: DoubtInterface;
  userid = 0;
  accepted: boolean = true;
  constructor(private route: ActivatedRoute, private service: DataService, private rut: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.did = this.route.snapshot.params.did;
    console.log(this.did);
    this.userid = parseInt(sessionStorage.getItem("userid"));
    if (this.did) {
      this.service.getDoubtById(this.did).then(res => {
        this.doubt = res.data;
        this.myform = new FormGroup({
          did: new FormControl(this.doubt.did, Validators.required),
          tid: new FormControl(this.userid, Validators.required),
          session: new FormControl(this.doubt.session, Validators.required),
          sdate: new FormControl(this.doubt.sdate, Validators.required),
          stime: new FormControl(this.doubt.stime, Validators.required),
          accepted: new FormControl(this.accepted, Validators.required)
        })
      })

    }
  }

  submit() {
    if(this.myform.valid)
    {
      this.service.updateDoubt(this.myform.value).subscribe(res =>{
        this.messageService.add({ severity: 'success', summary: 'Doubt Accepted', detail: res.msg });
        this.rut.navigateByUrl('/student/student-doubtby-course');
      })
    }
    else
    {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
    }
  }

}
