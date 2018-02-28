import { BrowserModule } from '@angular/platform-browser';
import { Component, TemplateRef } from '@angular/core';

import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* For Component Integration */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MailusComponent } from './mailus/mailus.component';
import { FooterComponent } from './footer/footer.component';
/* For Carousel Slider */
import { CarouselModule,PaginationModule,ModalModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import {ProjectComponent} from './projects/projects.component';
import { MoreeventsComponent } from './moreevents/moreevents.component';

/* For Form Validation & Creationm */
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CustomdirectiveDirective } from './custom/customdirective.directive';
import { LoginComponent } from './login/login.component';

/* For Mutlilingual Support */
import {TranslateModule} from 'ng2-translate';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'moreevents', component: MoreeventsComponent },
  { path: 'technologies', component: GalleryComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'mailus', component: MailusComponent },
  { path: 'contact', component: ContactComponent }
];
@NgModule({
    declarations: [
      AppComponent,
      NavbarComponent,
      SidebarComponent,
      HomeComponent,
      FooterComponent,
      MailusComponent,
      AboutComponent,
      GalleryComponent,
      MoreeventsComponent,
      CustomdirectiveDirective,
      LoginComponent,
      ContactComponent,
      ProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})

export class AppModule { }
