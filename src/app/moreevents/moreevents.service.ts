import { Injectable } from '@angular/core';
import { Http , Response,URLSearchParams,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { EventData } from './moreevents';


@Injectable()
export class MoreeventsService {
  /* private _eventdataurl='http://localhost/school/events.php'; */
  private _eventdataurl='assets/json/moreevents.json';
  constructor(private _http: Http){ }
  /*
   geteventdata(page,noofitems): Observable<EventData[]> {
    let params: URLSearchParams = new URLSearchParams();
    params .set('page', page);
    params.set('noofitems', noofitems);

    let requestOptions = new RequestOptions();
    requestOptions.search = params;
     return this._http.get(this._eventdataurl,requestOptions)
     .map((response: Response) => <EventData[]> response.json())
      //.do(data => console.log(JSON.stringify(data)))
     .catch(this.handleError);
  }
   */
  geteventdata(): Observable<EventData[]> {
     return this._http.get(this._eventdataurl)
     .map((response: Response) => <EventData[]> response.json())
     //.do(data => console.log(JSON.stringify(data)))
     .catch(this.handleError);
  }
  searchevent(EventTitle: string): Observable<EventData[]> {
    return this._http.get(this._eventdataurl+"?searchfor="+EventTitle)
    .map((response: Response) => <EventData[]> response.json())
    //.do(data => console.log(JSON.stringify(data)))
    .catch(this.handleError);
 }
   private handleError(error: Response) {
   console.error(error);
   return Observable.throw(error.json().error());
  }
}
