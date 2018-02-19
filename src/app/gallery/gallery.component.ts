import { Component, OnInit } from '@angular/core';
import { GalleryData } from '../gallery/gallery';
import { GalleryService } from '../gallery/gallery.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers:[GalleryService]
})
export class GalleryComponent implements OnInit {
  galleryData: GalleryData[];
  constructor(private _galleryData: GalleryService) {
   }

  ngOnInit() {
    this._galleryData.getgallerydata()
    .subscribe(galleryData =>
      {
        this.galleryData = galleryData;

      }
      );
  }

  previewImage(i) {
    var iDiv = document.createElement('div');
    iDiv.className = 'modal-backdrop fade in';
    iDiv.id = 'modalFade';
    var body = document.getElementsByTagName("body")[0];
    var previewImage = document.getElementById("preview"+i);
    previewImage.className = "modal fade in";
    previewImage.style.display="block";
    previewImage.setAttribute("aria-hidden","false");
    previewImage.insertBefore(iDiv, previewImage.childNodes[0]);
    body.className = "modal-open";
    body.style.paddingRight="17px";
  }
  closePreviewImage(i){
    var iDiv = document.getElementById('modalFade');
    var body = document.getElementsByTagName("body")[0];
    var previewImage = document.getElementById("preview"+i);
    previewImage.className = "modal fade";
    previewImage.style.display="none";
    previewImage.setAttribute("aria-hidden","true");
    iDiv.remove();
    body.className = "";
    body.style.paddingRight="";
  }
}
