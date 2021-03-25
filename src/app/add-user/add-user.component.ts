import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  roles:{};
  myform:FormGroup;
  constructor(private service:DataService) { }

  async ngOnInit()
  {
    await this.service.getRole().then(res =>{
      this.roles=res.data;
    })

    this.myform=new FormGroup({
      firstname:new FormControl("",Validators.required),
      lastname:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
      gender:new FormControl("",Validators.required),
      contact:new FormControl("",Validators.required),
      roleid:new FormControl("",Validators.required)
    })
    
  }

  submit()
  {
    this.service.addUser(this.myform.value).subscribe(res =>{
      
    }) 
  }

}
