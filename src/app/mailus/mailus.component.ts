import { Component,TemplateRef, OnInit,Input } from '@angular/core';
import {Maillus} from './maillus';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { forbiddenNameValidator } from '../custom/customdirective.directive';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MailusService } from '../mailus/mailus.service';
import {Observable} from 'rxjs/Rx';
import {TranslateService} from 'ng2-translate';
@Component({
  selector: 'app-mailus',
  templateUrl: './mailus.component.html',
  styleUrls: ['./mailus.component.css'],
  providers:[MailusService]
})

export class MailusComponent implements OnInit {
  modalRef: BsModalRef;
  mailForm : FormGroup;
  Maillus = new Maillus('',null,'','');
  feedback = "Thank you for your valuable feedback !. We will reach you shortly !...";
  status:String;
  constructor(private _mailusData: MailusService,private modalService: BsModalService, private translate : TranslateService) {

  }

  ngOnInit() {
    this.mailForm = new FormGroup({
      'name': new FormControl(this.Maillus.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'phone':new FormControl(this.Maillus.phoneno,[
        Validators.required,
        Validators.minLength(10)
      ]),
      'email':new FormControl(this.Maillus.email,[
        Validators.required
      ])
      ,
      'message':new FormControl(this.Maillus.message,[
        Validators.required
      ])
    });
  }
  get name() { return this.mailForm.get('name'); }
  get phone(){return this.mailForm.get('phone');}
  get email(){return this.mailForm.get('email');}
  get message(){return this.mailForm.get('message');}
  submitForm(template: TemplateRef<any>,formDir){
    //this.Maillus = new Maillus('test',123456789,'sad','asd');

    if(this.mailForm.valid){
      this._mailusData.mailusdata(this.mailForm.value).subscribe(
        data =>{
         // Enable on service return
          /*  this.status=JSON.stringify(data);
          if(this.status == '1'){ */
            if(data.length > 0){
            this.modalRef = this.modalService.show(template);
          }else{
            this.feedback = "Error in Sending Data. Contact Administrator.";
            this.modalRef = this.modalService.show(template);
          }
        }
      );

    }else{
      Object.keys(this.mailForm.controls).forEach(field => { // {1}
        const control = this.mailForm.get(field);            // {2}
        control.markAsTouched({ onlySelf: true });       // {3}
      });
    }
  }

}
