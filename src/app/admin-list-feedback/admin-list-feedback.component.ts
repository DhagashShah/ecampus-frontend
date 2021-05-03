import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin-list-feedback',
  templateUrl: './admin-list-feedback.component.html',
  styleUrls: ['./admin-list-feedback.component.css']
})
export class AdminListFeedbackComponent implements OnInit {

  batch:{};

  constructor(private service:DataService) { }

  ngOnInit()
  {
    this.service.getbatch().then(res =>{
      this.batch=res.data;
    })
  }

}
