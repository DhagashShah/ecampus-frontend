import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-faculty-list-batch',
  templateUrl: './faculty-list-batch.component.html',
  styleUrls: ['./faculty-list-batch.component.css']
})
export class FacultyListBatchComponent implements OnInit {

  userid=0;
  batch:{};
  constructor(private service:DataService) { }

  ngOnInit() 
  {
    this.userid = parseInt(sessionStorage.getItem('userid'));
    this.service.getBatchByFaculty(this.userid).then(res =>{
      this.batch=res.data;
    })
  }

}
