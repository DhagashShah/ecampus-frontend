import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { observable, Observable, Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NotesInterface } from '../notes-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-faculty-add-notes',
  templateUrl: './faculty-add-notes.component.html',
  styleUrls: ['./faculty-add-notes.component.css']
})
export class FacultyAddNotesComponent implements OnInit {


  course: {};
  userid = 0;
  myform: FormGroup;
  notes: {};
  notesData: NotesInterface;
  notesid = 0;
  constructor(private service: DataService, private route: ActivatedRoute,private confirmationService: ConfirmationService, private rut: Router, private messageService: MessageService) { }

  async ngOnInit() {
    this.userid = parseInt(sessionStorage.getItem("userid"));
    await this.service.getCourse().then(res => {
      this.course = res.data;
    })

    this.service.getNotesByUser(this.userid).then(res => {
      this.notes = res.data;
    })

    this.notesid = this.route.snapshot.params.notesid;
    if (this.notesid) {
      this.service.getNotesById(this.notesid).then(res => {
        this.notesData = res.data;
        this.myform = new FormGroup({
          notesid: new FormControl(this.notesData.notesid, Validators.required),
          userid: new FormControl(this.notesData.userid, Validators.required),
          courseid: new FormControl(this.notesData.courseid, Validators.required),
          path: new FormControl(this.notesData.path, [Validators.required,Validators.minLength(2)])
        })
      })

    }
    else {
      this.myform = new FormGroup({
        userid: new FormControl(this.userid, Validators.required),
        courseid: new FormControl("", Validators.required),
        path: new FormControl("", [Validators.required,Validators.minLength(2)])
      })
    }


  }

  submit() {
    if (this.notesid) {
      if (this.myform.valid) {
        this.service.updateNotes(this.myform.value).subscribe(res => {
          this.messageService.add({ severity: 'info', summary: 'Notes Updated', detail: res.msg });
        })
        this.rut.navigateByUrl("/faculty/faculty-add-notes");
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid credentials' });
      }

    }
    else {
      if (this.myform.valid) {
        this.service.addNotes(this.myform.value).subscribe(res => {
          this.messageService.add({ severity: 'success', summary: 'Notes Added', detail: res.msg });
        })
        this.rut.navigateByUrl("/faculty/faculty-add-notes");
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
        this.service.deleteNotes(value).subscribe(res => {
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













