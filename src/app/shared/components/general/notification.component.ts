import {Component, OnInit} from '@angular/core';
import {Notification, NotificationService} from '../../services/notification.service';
import NotificationMessage = Notification.NotificationMessage;

@Component({
  selector: 'app-notification',
  template: `
    <div *ngIf="notifications.length>0">
      <div *ngFor="let notification of notifications" class="notification {{notification.type}}">
        <span>{{notification.text}}</span>
      </div>
    </div>
  `,
  styles: []
})
export class NotificationComponent implements OnInit {
  notifications: Notification.NotificationMessage[];

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.notificationService
      .notifications
      .subscribe((notifications: NotificationMessage[]) => {
        this.notifications = notifications;
      });
  }
}
