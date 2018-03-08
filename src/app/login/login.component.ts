import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Login} from './login';
import {LoginService} from './login.service';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import {TranslateService} from 'ng2-translate';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginClick = false;
  loggedinClick = false;
  login = new Login('', '','','',0);
  loginForm : FormGroup;
  status;
  username:String;
  isLoggedIn;
  emailid:String;
  imageurl:string;
  errorText:String = "Invalid Login Credentials !";
  constructor(private _loginService:LoginService, private _route:Router,private translate : TranslateService) {
    this.username = sessionStorage.getItem('username');
    this.isLoggedIn =sessionStorage.getItem('isLoggedIn');
    this.emailid = sessionStorage.getItem('emailid');
    this.imageurl = sessionStorage.getItem('imageurl');
   }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email':new FormControl(this.login.email,[
        Validators.required
      ])
      ,
      'password':new FormControl(this.login.password,[
        Validators.required
      ])
    });
  }
  get email(){ return this.loginForm.get('email'); }
  get password(){ return this.loginForm.get('password'); }
  submitForm(formDir) {
    this.loginClick = !this.loginClick;
    if (this.loginForm.valid) {

      this._loginService.login(formDir).subscribe(
        data => {
          // Outer if condition for static login check if post request is made no need
          if(data.emailid == formDir.value["email"] && data.password == formDir.value["password"])
          {
              this.status = data.status;
              this.username = data.username;
              this.imageurl = data.imageurl;
              this.emailid = data.emailid;
              if(this.status == 1){
              sessionStorage.isLoggedIn = 1;
              sessionStorage.username = this.username;
              sessionStorage.emailid = this.emailid;
              sessionStorage.imageurl = this.imageurl;
              this.isLoggedIn =sessionStorage.isLoggedIn;
              this._route.navigate(['/resume']);
            }else{
              this.isLoggedIn =0
              this.status = 0;
              sessionStorage.isLoggedIn = 0;
            }
          }else{
            this.isLoggedIn =null;
            this.status = 0;
            sessionStorage.isLoggedIn = 0;
          }
         }
      );
    }else {
      Object.keys(this.loginForm.controls).forEach(field => { // {1}
        const control = this.loginForm.get(field);            // {2}
        control.markAsTouched({ onlySelf: true });       // {3}
      });
    }
  }
  logout(){
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("emailid");
    this._route.navigate(['']);
    window.location.reload();
  }

}
