import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-list-feedback',
  templateUrl: './student-list-feedback.component.html',
  styleUrls: ['./student-list-feedback.component.css']
})
export class StudentListFeedbackComponent implements OnInit {

  feedback:{};
  userid=0;
  constructor(private service:DataService) { }

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
    this.service.deletefeedback(value).subscribe(res =>{
      console.log("deleted",res);
      
    })
  }

}
