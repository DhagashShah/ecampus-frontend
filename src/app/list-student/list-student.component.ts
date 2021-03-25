import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  student: {};
  constructor(private service: DataService) { }

  async ngOnInit() {
    await this.service.listStudent().then(res => {
      this.student = res.data;
      console.log(this.student);

    });

  }

}
