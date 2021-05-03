import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';
import { Feedbackinterface } from '../feedbackinterface';

@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent implements OnInit {

  batch: {};
  userid = 0;
  feedbackid = 0;
  feedback:{};
  feedbackData:Feedbackinterface;
  myform: FormGroup;
  constructor(private service: DataService, private route: ActivatedRoute,private messageService: MessageService) { }

  async ngOnInit() {

    this.userid = parseInt(sessionStorage.getItem('userid'));

    await this.service.getBatchByStudent(this.userid).then(res => {
      this.batch = res.data;
    })
    console.log(this.batch);
    console.log(this.route);
    
    this.feedbackid = this.route.snapshot.params.feedbackid;
    
    
    
    console.log(this.feedbackid);
    if (this.feedbackid) {
       this.service.getfeedbackbyid(this.feedbackid).then(res => {
        this.feedbackData = res.data;
        console.log(this.feedback);
        
        this.myform = new FormGroup({
          feedbackid: new FormControl(this.feedbackData.feedbackid, Validators.required),
          userid: new FormControl(this.feedbackData.userid, Validators.required),
          bid: new FormControl(this.feedbackData.bid, Validators.required),
          explanation: new FormControl(this.feedbackData.explanation, Validators.required),
          material: new FormControl(this.feedbackData.material, Validators.required),
          punctuality: new FormControl(this.feedbackData.punctuality, Validators.required),
          teaching: new FormControl(this.feedbackData.teaching, Validators.required),
          communication: new FormControl(this.feedbackData.communication, Validators.required),
          comments: new FormControl(this.feedbackData.comments, Validators.required)
        })
      })
    }

    this.myform = new FormGroup({
      userid: new FormControl(this.userid, Validators.required),
      bid: new FormControl("", Validators.required),
      explanation: new FormControl("", Validators.required),
      material: new FormControl("", Validators.required),
      punctuality: new FormControl("", Validators.required),
      teaching: new FormControl("", Validators.required),
      communication: new FormControl("", Validators.required),
      comments: new FormControl("", Validators.required)
    })



  }

  submit() {
    if (this.feedbackid) {
      console.log(this.myform.value);
      this.service.updatefeedback(this.myform.value).subscribe(res => {
        console.log("updated...", res);

      })
    }
    else {
      console.log(this.myform.value);
      if(this.myform.valid)
      {
        this.service.addfeedback(this.myform.value).subscribe(res => {
          this.messageService.add({ severity: 'success', summary: 'Feedback Added', detail: res.msg });
          console.log(res);
  
        })
      }
      else
      {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Invalid credentials'});
      }
      
    }


  }

}
