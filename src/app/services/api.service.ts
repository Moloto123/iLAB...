import { Details } from './details';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //variable declaration
  users: any[];
  person: any;
  

  constructor(public Data: Details) { }

  //function to return students list
  getStudents() {
    return this.Data.students;
  }


  //function persons array
  getUsers() {
    return this.Data.persons;
  }

  //get single user data
  getuserinfo(ref) {
    this.users = this.Data.persons;
    this.users.forEach(i => {
      this.person = i['users'];
    })

    return this.person.find( e => e.UserID === ref);

  }


// get single user subjects

getSubjects(ref){
  this.users = this.Data.persons;
  this.users.forEach(i => {
    this.person = i['subjects'];
  })

  return this.person.find( e => e.UserID === ref);
 }
}




