import { Component, TemplateRef, OnInit} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ProjectData } from '../projects/projects';
import { ProjectService } from '../projects/projects.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SlicePipe } from '@angular/common';

import 'rxjs/add/operator/map';
@Component({
  selector: 'app-moreevents',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  modalRef: BsModalRef;
  projectData: ProjectData[];
 /*  projectSliceData: ProjectData[]; */
  totalItems = 0;
  currentPage = 1;
  smallnumPages = 0;
  itemsPerPage = 10;
  start = 0;
  end = 0;
  serialNo = 0;
  ProjectTitle = "";
  ProjectDesc= "";
  ProjectStartDate= "";
  ProjectEndDate= "";
  ProjectClient= "";
  ProjectRole= "";
  ProjectRoleDesc= "";
  ProjectUrl= "";
  ProjectStatus;
  ProjectTechnologies="";
  ProjectImageUrl = "";
  terms ="";
  emptyData=false;
  constructor(private _projectData: ProjectService,private modalService: BsModalService) {
   }

   pageChanged(event: any): void {

      /*   this._projectData.getprojectdata(event.page,event.itemsPerPage)
        .subscribe(projectData =>
          {
            this.projectData = projectData;
            this.totalItems = projectData.length;
          }
          ); */
          this.start = (event.page - 1) * event.itemsPerPage;
          this.end = this.start + event.itemsPerPage;
          this.currentPage = event.page;
          /* this.projectSliceData = this.eventData.slice(this.start,this.end); */

      }
    serialNoCal (i, currentPage, itemsPerPage) {
     return this.serialNo = (i + 1) + ( (currentPage - 1) * itemsPerPage );
    }
  ngOnInit() {

   /*  this._projectData.getprojectdata(0,10)
    .subscribe(projectData =>
      {
        this.projectData = projectData;
        this.totalItems = projectData.length;
      }
      ); */

      this._projectData.getprojectdata()
      .subscribe(projectData =>
          {
            this.projectData = projectData;
            this.totalItems = projectData.length;
            if(this.totalItems){
              this.start = (this.currentPage - 1) * this.itemsPerPage;
              this.end = this.start + this.itemsPerPage;
            /*   this.projectSliceData =  this.projectData.slice(this.start,this.end); */
            }
          }
        );
  }
  openModal(template: TemplateRef<any>,ProjectTitle,ProjectDesc,ProjectStartDate,ProjectEndDate,ProjectTechnologies,ProjectClient,ProjectRole,ProjectRoleDesc,ProjectUrl,ProjectStatus,ProjectImageUrl){
    this.ProjectTitle =ProjectTitle;
    this.ProjectDesc =ProjectDesc;
    this.ProjectStartDate =ProjectStartDate;
    this.ProjectEndDate =ProjectEndDate;
    this.ProjectClient =ProjectClient;
    this.ProjectTechnologies =ProjectTechnologies;
    this.ProjectRole =ProjectRole;
    this.ProjectRoleDesc =ProjectRoleDesc;
    this.ProjectStatus =ProjectStatus;
    this.ProjectStatus = "On Going"
    if(ProjectStatus == 1){
      this.ProjectStatus = "Completed";
    }
    this.ProjectUrl = ProjectUrl;
    this.ProjectImageUrl = ProjectImageUrl;
    this.modalRef = this.modalService.show(template);
  }
  search(terms){
    this.terms = terms;
    if(!(this.terms == "")){
      this._projectData.searchevent(this.terms)
      .subscribe(projectData =>
          {
            this.projectData = projectData;
            if(projectData.length > 0){
              this.emptyData = false;
            }else{
              this.emptyData = true;
            }
            this.totalItems = projectData.length;
            if(this.totalItems){
              this.start = (this.currentPage - 1) * this.itemsPerPage;
              this.end = this.start + this.itemsPerPage;
            /*   this.projectSliceData =  this.projectData.slice(this.start,this.end); */
            }
          }
        );
    }else{
      this._projectData.getprojectdata()
      .subscribe(projectData =>
          {
            this.projectData = projectData;
            if(projectData.length > 0){
              this.emptyData = false;
            }else{
              this.emptyData = true;
            }
            this.totalItems = projectData.length;
            if(this.totalItems){
              this.start = (this.currentPage - 1) * this.itemsPerPage;
              this.end = this.start + this.itemsPerPage;
            /*   this.projectSliceData =  this.projectData.slice(this.start,this.end); */
            }
          }
        );
    }
  }
}
