import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  usersList: {};
  constructor(private service: DataService) { }

  async ngOnInit() {
    await this.service.listFaculty().then(res => {
      this.usersList = res.data;
      
    })    
  }

}
