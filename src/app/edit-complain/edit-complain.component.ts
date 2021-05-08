import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Complaininterface } from '../complaininterface';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-complain',
  templateUrl: './edit-complain.component.html',
  styleUrls: ['./edit-complain.component.css']
})
export class EditComplainComponent implements OnInit {

  cid=0;
  complain:Complaininterface;
  myform:FormGroup;
  dummyDate:any;
  rdate:any;
  resolve:boolean=true;
  constructor(private rut:Router,private service:DataService,private route:ActivatedRoute,public datepipe : DatePipe,private messageService: MessageService) { }

  async ngOnInit()
  {
    this.cid=this.route.snapshot.params.cid;
    console.log(this.cid);
    this.dummyDate=new Date();
    this.rdate = this.datepipe.transform(this.dummyDate,'yyyy-MM-dd');
    await this.service.getcomplainbyid(this.cid).then(res =>{
      this.complain=res.data;
      this.myform=new FormGroup({
        cid:new FormControl(this.complain.cid,Validators.required),
        sid:new FormControl(this.complain.sid,Validators.required),
        complain:new FormControl(this.complain.complain,Validators.required),
        isresolve:new FormControl(this.resolve,Validators.required),
        cdate:new FormControl(this.complain.cdate,Validators.required),
        rdate:new FormControl(this.rdate,Validators.required),
        comment: new FormControl(this.complain.comment,[Validators.required,Validators.minLength(2)])
      })


    })
    console.log(this.complain);
    
  }

  submit()
  {
    if(this.myform.valid)
    {
      this.service.updatecomplain(this.myform.value).subscribe(res =>{
        console.log(res);
        this.messageService.add({ severity: 'info', summary: 'Updated', detail: res.msg });
      })
      this.rut.navigateByUrl('/admin/admin-dashboard');
    }
    else
    {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Invalid credentials" });
    }
    
  }

}
