import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyright:Date;
  constructor() { 
    this.copyright = new Date();
  }

  ngOnInit() {
  }

}
