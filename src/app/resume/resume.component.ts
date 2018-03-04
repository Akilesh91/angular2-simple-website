import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
isLoggedIn;
  constructor(private _route:Router) {
    this.isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if(this.isLoggedIn != 1){
      this._route.navigate(['']);
    }
  }

  ngOnInit() {
  }

}
