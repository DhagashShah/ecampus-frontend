import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';
import { Userinterface } from '../userinterface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userid = 0;
  roles: {};
  myform: FormGroup;
  students: Userinterface;

  constructor(private route: ActivatedRoute, private service: DataService, private messageService: MessageService, private rut: Router) { }

  async ngOnInit() {

    await this.service.getRole().then(res => {
      this.roles = res.data;
    })
    this.userid = this.route.snapshot.params.userid;
    if (this.userid) {
      this.service.getStudentById(this.userid).then(res => {
        this.students = res.data;
        this.myform = new FormGroup({
          userid: new FormControl(this.students.userid, Validators.required),
          firstname: new FormControl(this.students.firstname,[Validators.required,Validators.minLength(2),Validators.maxLength(10)]),
          lastname: new FormControl(this.students.lastname,[Validators.required,Validators.minLength(2),Validators.maxLength(10)] ),
          email: new FormControl(this.students.email,[Validators.required,Validators.email]),
          password: new FormControl(this.students.password, Validators.required),
          gender: new FormControl(this.students.gender, Validators.required),
          contact: new FormControl(this.students.contact,[Validators.required,Validators.minLength(10),Validators.maxLength(10)] ),
          roleid: new FormControl(this.students.roleid, Validators.required),
          active: new FormControl(this.students.active, Validators.required)
        })
      })
    }
    else {
      this.myform = new FormGroup({
        firstname: new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(10)]),
        lastname: new FormControl("",[Validators.required,Validators.minLength(2),Validators.maxLength(2)]),
        email: new FormControl("",[Validators.required,Validators.email]),
        password: new FormControl("", Validators.required),
        gender: new FormControl("", Validators.required),
        contact: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
        roleid: new FormControl("", Validators.required),
        active: new FormControl("", Validators.required)
      });
      
    }
  }

  submit() {
    if (this.userid) {
      if (this.myform.valid) {
        this.service.updatestudent(this.myform.value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'User Updated', detail: res.msg });
          console.log(this.myform.value);

        })
        this.rut.navigateByUrl('/admin/add-user');
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });

      }
    }
    else {
 
      if (this.myform.valid) {
        this.service.addUser(this.myform.value).subscribe(res => {
          this.messageService.add({ severity: 'success', summary: 'User Added', detail: res.msg });
          this.rut.navigateByUrl('/admin/add-user');
        })
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });

      }
    }


  }

}
