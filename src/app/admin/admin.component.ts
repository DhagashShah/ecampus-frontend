import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private rut:Router,private service:DataService) { }

  ngOnInit(): void 
  {
    
    
  }

  logout()
  {
    sessionStorage.removeItem('isAdminLogin');
    sessionStorage.removeItem('admin');
    this.rut.navigateByUrl('/');
  }

}
