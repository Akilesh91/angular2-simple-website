import { Injectable } from '@angular/core';
import { Http , Response,URLSearchParams,Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Maillus } from './maillus';

@Injectable()
export class MailusService {

  private _mailusurl='http://localhost/school/mailus.php';
  constructor(private _http: Http){ }

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
    return this._http.post(this._mailusurl,params,{headers:headers})
    .map((response: Response) => response.json())
    /* .do(status =>JSON.stringify(status)) */
    .catch(this.handleError);
 }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server Error");
   }
}
