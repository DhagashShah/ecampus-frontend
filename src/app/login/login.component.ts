import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myform: FormGroup;
  constructor(private service: DataService, private rut: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.myform = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }

  submit() {
    if (this.myform.valid) {
      this.service.loginuser(this.myform.value).subscribe(res => {

        if (res.data != '') {
          if (res.status == 201) {

            if (res.data.roleid == 1) {
              this.messageService.add({ severity: 'success', summary: 'Admin Login Successfull', detail: res.msg });
              this.rut.navigateByUrl('/admin/admin-dashboard');
              sessionStorage.setItem("isAdminLogin", "true");
              sessionStorage.setItem('admin', res.data);
            }
            else if (res.data.roleid == 2) {
              this.messageService.add({ severity: 'success', summary: 'Faculty Login Successfull', detail: res.msg });
              this.rut.navigateByUrl('/faculty/faculty-dashboard');
              sessionStorage.setItem("isFacultyLogin", "true");
              sessionStorage.setItem('userid', res.data.userid);
            }
            else if (res.data.roleid == 3) {
              this.messageService.add({ severity: 'success', summary: 'Student Login Successfull', detail: res.msg });
              this.rut.navigateByUrl("/student/student-dashboard");
              sessionStorage.setItem("isStudentLogin", "true");
              sessionStorage.setItem('userid', res.data.userid);
            }
            else if (res.data.roleid == null) {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid User' });
            }
          }
          else
          {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
          }
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });

        }

      })
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
    }



  }

}
