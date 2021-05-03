import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-faculty-getstudent-date',
  templateUrl: './faculty-getstudent-date.component.html',
  styleUrls: ['./faculty-getstudent-date.component.css']
})
export class FacultyGetstudentDateComponent implements OnInit {

  
  constructor(private service:DataService,private route:ActivatedRoute) { }

  ngOnInit()
  {
    
    
  }

}
