import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-list-feedback',
  templateUrl: './student-list-feedback.component.html',
  styleUrls: ['./student-list-feedback.component.css']
})
export class StudentListFeedbackComponent implements OnInit {

  feedback:{};
  userid=0;
  constructor(private service:DataService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  async ngOnInit()
  {
    this.userid = parseInt(sessionStorage.getItem("userid"));
    await this.service.getfeedback(this.userid).then(res =>{
      this.feedback=res.data;
    })
    console.log(this.feedback);
    
  }
  delete(value)
  {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.service.deletefeedback(value).subscribe(res =>{
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
