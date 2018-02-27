import { Injectable } from '@angular/core';
import { Http , Response,URLSearchParams,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { ProjectData } from './projects';


@Injectable()
export class ProjectService {
  /* private _eventdataurl='http://localhost/school/events.php'; */
  private _projectdataurl='assets/json/projects.json';
  constructor(private _http: Http){ }
  /*
   getprojectdata(page,noofitems): Observable<ProjectData[]> {
    let params: URLSearchParams = new URLSearchParams();
    params .set('page', page);
    params.set('noofitems', noofitems);

    let requestOptions = new RequestOptions();
    requestOptions.search = params;
     return this._http.get(this._projectdataurl,requestOptions)
     .map((response: Response) => <ProjectData[]> response.json())
      //.do(data => console.log(JSON.stringify(data)))
     .catch(this.handleError);
  }
   */
  getprojectdata(): Observable<ProjectData[]> {
     return this._http.get(this._projectdataurl)
     .map((response: Response) => <ProjectData[]> response.json())
     //.do(data => console.log(JSON.stringify(data)))
     .catch(this.handleError);
  }
  searchevent(ProjectTitle: string): Observable<ProjectData[]> {
    return this._http.get(this._projectdataurl+"?searchfor="+ProjectTitle)
    .map((response: Response) => <ProjectData[]> response.json())
    //.do(data => console.log(JSON.stringify(data)))
    .catch(this.handleError);
 }
   private handleError(error: Response) {
   console.error(error);
   return Observable.throw(error.json().error());
  }
}
