import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bocked-users',
  templateUrl: './bocked-users.component.html',
  styleUrls: ['./bocked-users.component.css']
})
export class BockedUsersComponent implements OnInit {

  students:Array<any>=[];
  faculties:Array<any>=[];
  constructor(private service:DataService) { }

  ngOnInit()
  {
    this.service.getblockedstudents().then(res =>{
      this.students=res.data;
    })
    this.service.getblockedfaculty().then(res =>{
      this.faculties=res.data;
    })
  }

}
