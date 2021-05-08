import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { DataService } from '../data.service';
import { TaskInterface } from '../task-interface';

@Component({
  selector: 'app-faculty-add-task',
  templateUrl: './faculty-add-task.component.html',
  styleUrls: ['./faculty-add-task.component.css']
})
export class FacultyAddTaskComponent implements OnInit {

  course: {};
  userid = 0;
  myform: FormGroup;
  task: {};
  assignedTask: {};
  taskid = 0;
  taskData: TaskInterface;
  constructor(private service: DataService, private route: ActivatedRoute, private rut: Router, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  async ngOnInit() {

    this.taskid = this.route.snapshot.params.taskid;
    this.userid = parseInt(sessionStorage.getItem("userid"));
    await this.service.getCourse().then(res => {
      this.course = res.data;
    })

    this.service.getTaskByUser(this.userid).then(res => {
      this.task = res.data;
    })

    this.service.getAssignedTaskByUser(this.userid).then(res => {
      this.assignedTask = res.data;
    })

    if (this.taskid) {
      this.service.getTaskById(this.taskid).then(res => {
        this.taskData = res.data;
        this.myform = new FormGroup({
          taskid: new FormControl(this.taskData.taskid, Validators.required),
          taskname: new FormControl(this.taskData.taskname,[Validators.required,Validators.minLength(2)]),
          courseid: new FormControl(this.taskData.courseid, [Validators.required]),
          userid: new FormControl(this.taskData.userid, Validators.required),
          path: new FormControl(this.taskData.path, [Validators.required,Validators.minLength(2)])
        })
      })
    }
    else {
      this.myform = new FormGroup({
        taskname: new FormControl("",[Validators.required,Validators.minLength(2)]),
        courseid: new FormControl("", Validators.required),
        userid: new FormControl(this.userid, Validators.required),
        path: new FormControl("",[Validators.required,Validators.minLength(2)])
      })
    }



  }
  submit() {

    if (this.taskid) {
      if (this.myform.valid) {
        this.service.updateTask(this.myform.value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Task Updated', detail: res.msg });
          this.rut.navigateByUrl('/faculty/faculty-add-task');
        })
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
      }
    }
    else {
      if (this.myform.valid) {
        this.service.addTask(this.myform.value).subscribe(res => {
          this.messageService.add({ severity: 'success', summary: 'Task Added', detail: res.msg });
          this.rut.navigateByUrl('/faculty/faculty-add-task');
        })
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
      }
    }

  }

  delete(value) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.service.deleteTask(value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
        })
      },
      reject: (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
            break;
        }
      }
    });

  }

}
