import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Login } from './login';
@Injectable()
export class LoginService {
  //Enable if service is called
  //private _loginURL = "http://localhost/school/login.php";
  private _loginURL = "assets/json/login.json";
  constructor(private _http:Http) { }
 // login(formDir): Observable<Login[]> {
  login(formDir): any {
    let someFormData = new FormData();
    Object.keys(formDir.value).forEach(k => {
      someFormData.append(k, formDir.value[k]);
    });
    // Enable if Service is called
     /* return this._http.post(this._loginURL,someFormData)
     .map((response: Response) => response.json())
     //.do(data => console.log(JSON.stringify(data)))
     .catch(this.handleError); */
     return this._http.get(this._loginURL)
     .map((response: Response) =><Login[]> response.json())
     .catch(this.handleError);
     
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error());
   }
}
