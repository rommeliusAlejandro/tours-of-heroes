import {Component, OnInit} from '@angular/core';
import {NotificationsService} from "../notifications.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  totalNotifications: number;

  constructor(private notificationsService: NotificationsService) {
  }

  ngOnInit() {
    this.getTotalNotifications();
  }

  getTotalNotifications(): void {
    this.notificationsService.totalNotifications()
      .subscribe(total => this.totalNotifications = total);
  }

}
