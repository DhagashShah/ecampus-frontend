import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  myform:FormGroup;
  constructor(private service:DataService,private rut:Router, private messageService: MessageService) { }

  ngOnInit(): void 
  {
    this.myform=new FormGroup({
      email:new FormControl("",Validators.required)
    })
    
  }

  submit()
  {
    console.log(this.myform.value.email);
    
    if(this.myform.valid)
    {
      this.service.getForgetPassword(this.myform.value.email).then(res =>{
        this.messageService.add({ severity: 'info', summary: 'OTP sent', detail: res.msg });
      })
      this.rut.navigateByUrl('/reset');
    } 
    else
    {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Enter Email' });
    }   
    
  }

}
