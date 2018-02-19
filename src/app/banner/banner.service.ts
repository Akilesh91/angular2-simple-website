import { Injectable } from '@angular/core';
import { Http , Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { BannerData } from './banner';

@Injectable()
export class BannerService {
  /* private _bannerdataurl='http://localhost/school/banner.php'; */
  private _bannerdataurl='assets/json/banner.json';
  constructor(private _http: Http){ }
  getbannerdata(): Observable<BannerData[]> {
     return this._http.get(this._bannerdataurl)
     .map((response: Response) => <BannerData[]> response.json())
     /* .do(data => console.log(JSON.stringify(data))) */
     .catch(this.handleError);
  }
  private handleError(error: Response) {
   console.error(error);
   return Observable.throw(error.json().error());
}
}