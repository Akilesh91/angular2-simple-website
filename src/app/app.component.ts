import { Component, Input, OnInit} from '@angular/core';
import {LangService} from './lang/lang.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LangService]
})
export class AppComponent implements OnInit {
  title = 'app';
  username;
  isLoggedIn = 0;
  emailid;
  selectedLang = "en";
  constructor(public lang : LangService,private router: Router) {
    lang.setDefaultLang(this.selectedLang);
  }
  ngOnInit() {
    /* this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 650);
    }); */
}
}
