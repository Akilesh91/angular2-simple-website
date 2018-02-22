import { Component, OnInit } from '@angular/core';
import { RankholdersData } from '../rankholders/rankholders';
import { RankholdersService } from '../rankholders/rankholders.service';
import { Http , Response } from '@angular/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RankholdersService]
})
export class HomeComponent implements OnInit {

  RankholdersData: RankholdersData[];
  count1= 0;
  count2= 0;
  count3= 0;
  count4= 0;
  start1 = 85;
  start2 = 83;
  start3 = 75;
  start4 = 84;
  constructor(private _rankholdersData: RankholdersService) {
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
  ngOnInit() {
    this._rankholdersData.getrankholdersdata()
    .subscribe(RankholdersData => this.RankholdersData = RankholdersData);

  }

}
