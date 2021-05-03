import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-batchby-faculty',
  templateUrl: './batchby-faculty.component.html',
  styleUrls: ['./batchby-faculty.component.css']
})
export class BatchbyFacultyComponent implements OnInit {

  userid=0;
  batch:{};
  constructor(private service:DataService,private route:ActivatedRoute) { }

  ngOnInit()
  {
    this.userid=this.route.snapshot.params.userid;
    console.log(this.userid);
    this.service.getBatchByFaculty(this.userid).then(res =>{
      this.batch=res.data;
    })
  }

}
