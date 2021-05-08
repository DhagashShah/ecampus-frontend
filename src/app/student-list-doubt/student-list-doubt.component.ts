import { Component, OnInit } from '@angular/core';
import { parse } from 'node:path';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-list-doubt',
  templateUrl: './student-list-doubt.component.html',
  styleUrls: ['./student-list-doubt.component.css']
})
export class StudentListDoubtComponent implements OnInit {

  doubts:{};
  sid = 0;
  notaccepted:{};
  constructor(private service: DataService,private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(){

    this.sid = parseInt(sessionStorage.getItem("userid"));
     this.service.getDoubtByStudent(this.sid).then(res => {
      this.doubts = res.data;
    })

    this.service.getNotAcceptedDubtByStudent(this.sid).then(res =>{
      this.notaccepted=res.data;
    })
    
  }
  delete(value)
  {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.service.deleteDoubt(value).subscribe(res =>{
          this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
        })
      },
      reject: (type) => {
          switch(type) {
              case ConfirmEventType.REJECT:
                  this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
              break;
              case ConfirmEventType.CANCEL:
                  this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
              break;
          }
      }
  });
    
  }

}
