import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

//varriable declaration
students : any;
users : any[];
 profiles : any;
  constructor(public Data : ApiService) { }

  ngOnInit() {
this.students = this.Data.getStudents();
this.users = this.Data.getUsers();
 
//function using arrow functions

this.users.forEach( element =>{
console.log(element);
 this.profiles = element["users"];
 console.log(this.profiles);
})

  }

}
