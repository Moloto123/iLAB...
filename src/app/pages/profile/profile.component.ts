import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private_route: any;

  constructor(public data : ApiService, public _route : ActivatedRoute) { }

//varriables 
user : any;
Ref : any;
subjects : any;


  ngOnInit() {
    //get user id 
     this.Ref = this. _route.snapshot.paramMap.get('ref');
     console.log('Ref', this.Ref);
     
    this.user = this.data.getuserinfo(this.Ref);
    console.log(this.user);

   // get subjects 
   this.subjects = this.data.getSubjects(this.Ref);
   console.log(this.subjects);

  }

}



      

