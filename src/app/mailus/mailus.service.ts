import { Injectable } from '@angular/core';
import { Http , Response,URLSearchParams,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Maillus } from './maillus';

@Injectable()
export class MailusService {

  //private _mailusurl='http://localhost/school/mailus.php';
  private _mailusurl='assets/json/mailus.json';
  constructor(private _http: Http){ }
  mailus : Maillus[];
  mailusdata(formData): Observable<Maillus[]> {
   /* console.log(formData.value);
    let headers = new Headers({
      'Access-Control-Request-Method': 'POST',
      'Access-Control-Request-Headers': 'X-Custom-Header'
    });
    let options = new RequestOptions({ headers: headers }); */
    //let body = JSON.stringify(formData);
   /*  let someFormData = new FormData();
    Object.keys(formData.value).forEach(k => {
      someFormData.append(k, formData.value[k]);
    }); */
    var json = JSON.stringify(formData);
    var params = "json="+json;
    var headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
   // Enable if web service is called
    /* return this._http.post(this._mailusurl,params,{headers:headers})
    .map((response: Response) => response.json())
    .catch(this.handleError); */
    return this._http.get(this._mailusurl)
    .map((response: Response) => <Maillus[]> response.json())
    .do(data => {
      this.mailus =data; 
     })
    .catch(this.handleError);
    
 }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server Error");
   }
}
