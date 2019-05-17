import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroeDetailsComponent} from './heroe-details/heroe-details.component';
import {MessagesComponent} from './messages/messages.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {NotificationsModule} from "./notifications/notifications.module";
import {NotificationsComponent} from "./notifications/notifications.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NotificationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
