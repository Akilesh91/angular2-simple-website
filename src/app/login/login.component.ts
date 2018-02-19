import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Login} from './login';
import {LoginService} from './login.service';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginClick = false;
  loggedinClick = false;
  login = new Login('', '');
  loginForm : FormGroup;
  status;
  username:String;
  isLoggedIn;
  emailid:String;
  errorText:String = "Invalid Login Credentials !";
  constructor(private _loginService:LoginService, private _route:Router) {
    this.username = sessionStorage.getItem('username');
    this.isLoggedIn =sessionStorage.getItem('isLoggedIn');
    this.emailid = sessionStorage.getItem('emailid');
    console.log(this.username);
    console.log(this.isLoggedIn);
    console.log(this.emailid);
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
          this.status = data.status;
          this.username = data.username;
          this.emailid = data.emailid;
          console.log(this.username);
            if(this.status == 1){
              // localStorage.setItem('isLoggedIn', '1');
              sessionStorage.isLoggedIn = 1;
              sessionStorage.username = this.username;
              sessionStorage.emailid = this.emailid;
              this.isLoggedIn =sessionStorage.isLoggedIn;
              this._route.navigate(['/home']);
            }else{
              this.isLoggedIn =0;
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
