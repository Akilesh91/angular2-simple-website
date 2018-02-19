import { Component, Input} from '@angular/core';
import {LangService} from './lang/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LangService]
})
export class AppComponent {
  title = 'app';
  username;
  isLoggedIn = 0;
  emailid;
  selectedLang = "en";
  constructor(public lang : LangService) {
      lang.setDefaultLang(this.selectedLang);
  }

}
