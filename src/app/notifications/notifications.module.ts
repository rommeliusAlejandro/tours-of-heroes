import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import {AngularFontAwesomeModule} from "angular-font-awesome";

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  exports: [
    NotificationsComponent
  ],
  declarations: [NotificationsComponent]
})
export class NotificationsModule { }
