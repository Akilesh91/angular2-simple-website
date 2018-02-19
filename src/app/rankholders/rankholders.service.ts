import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { RankholdersData } from './rankholders';


@Injectable()
export class RankholdersService {
  private _rankholdersdataurl='assets/json/rankholders.json';
  constructor(private _http: Http){ }
  getrankholdersdata(): Observable<RankholdersData[]> {
     return this._http.get(this._rankholdersdataurl)
     .map((response: Response) => <RankholdersData[]> response.json())
     /* .do(data => console.log(JSON.stringify(data))) */
     .catch(this.handleError);
  }
  private handleError(error: Response) {
   console.error(error);
   return Observable.throw(error.json().error());
}
}
