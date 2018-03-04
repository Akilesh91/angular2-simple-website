import { Component, TemplateRef, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EventData } from '../moreevents/moreevents';
import { MoreeventsService } from '../moreevents/moreevents.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SlicePipe } from '@angular/common';

import 'rxjs/add/operator/map';
@Component({
  selector: 'app-moreevents',
  templateUrl: './moreevents.component.html',
  styleUrls: ['./moreevents.component.css'],
  providers: [MoreeventsService]
})
export class MoreeventsComponent implements OnInit {
  modalRef: BsModalRef;
  eventData: EventData[];
 /*  eventSliceData: EventData[]; */
  totalItems = 0;
  currentPage = 1;
  smallnumPages = 0;
  itemsPerPage = 5;
  start = 0;
  end = 0;
  serialNo = 0;
  modalTitle="";
  modalDesc="";
  modalImageUrl ="";
  terms ="";
  emptyData=false;
  constructor(private _eventData: MoreeventsService,private modalService: BsModalService) {
   }

   pageChanged(event: any): void {

      /*   this._eventData.geteventdata(event.page,event.itemsPerPage)
        .subscribe(eventData =>
          {
            this.eventData = eventData;
            this.totalItems = eventData.length;
          }
          ); */
          this.start = (event.page - 1) * event.itemsPerPage;
          this.end = this.start + event.itemsPerPage;
          this.currentPage = event.page;
          /* this.eventSliceData = this.eventData.slice(this.start,this.end); */

      }
    serialNoCal (i, currentPage, itemsPerPage) {
     return this.serialNo = (i + 1) + ( (currentPage - 1) * itemsPerPage );
    }
  ngOnInit() {

   /*  this._eventData.geteventdata(0,10)
    .subscribe(eventData =>
      {
        this.eventData = eventData;
        this.totalItems = eventData.length;
      }
      ); */

      this._eventData.geteventdata()
      .subscribe(eventData =>
          {
            this.eventData = eventData;
            this.totalItems = eventData.length;
            if(this.totalItems){
              this.start = (this.currentPage - 1) * this.itemsPerPage;
              this.end = this.start + this.itemsPerPage;
            /*   this.eventSliceData =  this.eventData.slice(this.start,this.end); */
            }
          }
        );
  }
  openModal(template: TemplateRef<any>,EventTitle,EventDesc,EventImageUrl) {
    this.modalTitle =EventTitle;
    this.modalDesc =EventDesc;
    this.modalImageUrl=EventImageUrl;
    this.modalRef = this.modalService.show(template);
  }
  search(terms){
    this.terms = terms;
    if(!(this.terms == "")){
      this._eventData.searchevent(this.terms)
      .subscribe(eventData =>
          {
            this.eventData = eventData;
            if(eventData.length > 0){
              this.emptyData = false;
            }else{
              this.emptyData = true;
            }
            this.totalItems = eventData.length;
            if(this.totalItems){
              this.start = (this.currentPage - 1) * this.itemsPerPage;
              this.end = this.start + this.itemsPerPage;
            /*   this.eventSliceData =  this.eventData.slice(this.start,this.end); */
            }
          }
        );
    }else{
      this._eventData.geteventdata()
      .subscribe(eventData =>
          {
            this.eventData = eventData;
            if(eventData.length > 0){
              this.emptyData = false;
            }else{
              this.emptyData = true;
            }
            this.totalItems = eventData.length;
            if(this.totalItems){
              this.start = (this.currentPage - 1) * this.itemsPerPage;
              this.end = this.start + this.itemsPerPage;
            /*   this.eventSliceData =  this.eventData.slice(this.start,this.end); */
            }
          }
        );
    }

  }
}
