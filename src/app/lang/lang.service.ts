import { Injectable } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Injectable()
export class LangService {
  constructor(private translate:TranslateService) {
    translate.addLangs(["en", "fr"]);
    /*
    translate.setDefaultLang(defaultLang);
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    */
  }
  setDefaultLang(defaultLang:any){
    this.translate.setDefaultLang(defaultLang);
  }
}
