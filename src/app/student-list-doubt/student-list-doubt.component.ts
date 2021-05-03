import { Component, OnInit } from '@angular/core';
import { parse } from 'node:path';
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
  constructor(private service: DataService) { }

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
    this.service.deleteDoubt(value).subscribe(res =>{
      console.log("deleted",res);
      
    })
  }

}
