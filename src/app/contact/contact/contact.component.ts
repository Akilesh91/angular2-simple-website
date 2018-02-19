import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isLoggedIn : String;
  constructor(private _route:Router) {
    this.isLoggedIn =sessionStorage.getItem('isLoggedIn');
    if(!this.isLoggedIn){
      this._route.navigate(['']);
    }
   }

  ngOnInit() {
  }

}
