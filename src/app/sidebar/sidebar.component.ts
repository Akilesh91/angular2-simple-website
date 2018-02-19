import { Component, OnInit } from '@angular/core';
import { BannerData } from '../banner/banner';
import { BannerService } from '../banner/banner.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [BannerService]
})
export class SidebarComponent implements OnInit {

  bannerData: BannerData[];
  constructor(private _bannerData: BannerService) {
   }

  ngOnInit() {
    this._bannerData.getbannerdata()
    .subscribe(bannerData => this.bannerData = bannerData);
  }

}
