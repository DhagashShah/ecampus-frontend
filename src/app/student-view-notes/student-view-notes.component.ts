import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-view-notes',
  templateUrl: './student-view-notes.component.html',
  styleUrls: ['./student-view-notes.component.css']
})
export class StudentViewNotesComponent implements OnInit {

  courseid=0;
  notes:{};
  constructor(private route:ActivatedRoute,private service:DataService) { }

  ngOnInit(): void {
    this.courseid=this.route.snapshot.params.courseid;
    console.log(this.courseid);
    this.service.getNotesByCourse(this.courseid).then(res =>{
      this.notes=res.data;
    })
  }

}
