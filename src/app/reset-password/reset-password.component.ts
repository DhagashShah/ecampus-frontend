import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  myform:FormGroup;
  constructor(private service:DataService, private messageService: MessageService,private rut:Router) { }

  ngOnInit(): void {
    this.myform=new FormGroup({
      email:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
      otp:new FormControl("",Validators.required)
    })
  }
  submit()
  {
    console.log(this.myform.value);
    
    if(this.myform.valid)
    {
      this.service.setnewpassword(this.myform.value).subscribe(res=>{
        console.log(res);
        if(res.status!=201)
          {
            this.rut.navigate([''])
            this.messageService.add({severity:'success', summary:'Password Updated', detail:res.msg});
          }
      })
    }
    else
    {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
    }
     
  }

}
