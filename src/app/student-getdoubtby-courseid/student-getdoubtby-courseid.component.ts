import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-getdoubtby-courseid',
  templateUrl: './student-getdoubtby-courseid.component.html',
  styleUrls: ['./student-getdoubtby-courseid.component.css']
})
export class StudentGetdoubtbyCourseidComponent implements OnInit {

  courseid=0;
  doubts:{};
  userid=0;
  dj:{};
  accepted:{};
  constructor(private route:ActivatedRoute,private service:DataService) { }

  ngOnInit()
  {
    this.userid=parseInt(sessionStorage.getItem("userid"));
    this.courseid=this.route.snapshot.params.courseid;

    this.service.getDoubtByCourse(this.courseid,this.userid).then(res =>{
      this.doubts=res.data;
    })

    this.service.getAcceptedDoubts(this.courseid).then(res =>{
      this.accepted=res.data;
    })
    
  }

}
