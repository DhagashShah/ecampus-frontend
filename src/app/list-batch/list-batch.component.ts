import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-batch',
  templateUrl: './list-batch.component.html',
  styleUrls: ['./list-batch.component.css']
})
export class ListBatchComponent implements OnInit {

  batch:{};
  constructor(private service:DataService) { }

  ngOnInit()
  {

    this.service.getbatch().then(res =>{
      this.batch=res.data;
    })
  }
  
  

}
