import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { GalleryData } from './gallery';

@Injectable()
export class GalleryService {
  private _gallerydataurl='assets/json/gallery.json';
  constructor(private _http: Http){ }
  getgallerydata(): Observable<GalleryData[]> {
     return this._http.get(this._gallerydataurl)
     .map((response: Response) => <GalleryData[]> response.json())
     /* .do(data => console.log(JSON.stringify(data))) */
     .catch(this.handleError);
  }
  private handleError(error: Response) {
   console.error(error);
   return Observable.throw(error.json().error());
}
}
