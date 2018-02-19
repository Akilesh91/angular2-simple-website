import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Login } from './login';
@Injectable()
export class LoginService {
  private _loginURL = "http://localhost/school/login.php";
  constructor(private _http:Http) { }
 // login(formDir): Observable<Login[]> {
  login(formDir): any {
    let someFormData = new FormData();
    Object.keys(formDir.value).forEach(k => {
      someFormData.append(k, formDir.value[k]);
    });
     return this._http.post(this._loginURL,someFormData)
     .map((response: Response) => response.json())
     //.do(data => console.log(JSON.stringify(data)))
     .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error());
   }
}
