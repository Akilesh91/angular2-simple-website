import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { RankholdersData } from '../rankholders/rankholders';
import { RankholdersService } from '../rankholders/rankholders.service';
import {EventData} from '../moreevents/moreevents'
import {MoreeventsService} from '../moreevents/moreevents.service';
import { Http , Response } from '@angular/http';
import {TranslateService} from 'ng2-translate';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RankholdersService,MoreeventsService]
})
export class HomeComponent implements OnInit {
  modalRef:BsModalRef;
  RankholdersData: RankholdersData[];
  MoreeventsData : EventData[];
  
  start = 0;
  end = 3;
  count1= 0;
  count2= 0;
  count3= 0;
  count4= 0;
  start1 = 85;
  start2 = 83;
  start3 = 75;
  start4 = 84;
  modalTitle="";
  modalDesc="";
  modalImageUrl ="";
  constructor(private _rankholdersData: RankholdersService,private _moreeeventsData: MoreeventsService,  private modalService: BsModalService, private translate : TranslateService) {
       /* Timer Code Starts Here */
       this._timerTick();
   }
   private _timerTick() {
     if (this.count1 !== this.start1) {
        ++this.count1;
     }
     if (this.count2 !== this.start2) {
      ++this.count2;
    }

   if (this.count3 !== this.start3) {
    ++this.count3;
    }
    if (this.count4 !== this.start4) {
      ++this.count4;
   }
   if(!(this.count1 === this.start1 && this.count2 === this.start2 && this.count3 === this.start3 && this.count4 === this.start4)){
    setTimeout(() => this._timerTick(), 50);
   }

  }
  openModal(template: TemplateRef<any>,EventTitle,EventDesc,EventImageUrl) {
    this.modalTitle =EventTitle;
    this.modalDesc =EventDesc;
    this.modalImageUrl=EventImageUrl;
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
    this._rankholdersData.getrankholdersdata()
    .subscribe(RankholdersData => this.RankholdersData = RankholdersData);
    this._moreeeventsData.geteventdata()
    .subscribe(MoreeventsData =>
      {
        this.MoreeventsData = MoreeventsData;
        if(this.MoreeventsData.length > 0){
          this.MoreeventsData =  this.MoreeventsData.slice(this.start,this.end);
        }
      }      
    );

  }

}
