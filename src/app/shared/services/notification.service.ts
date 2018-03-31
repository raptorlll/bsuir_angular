import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import NotificationMessage = Notification.NotificationMessage;
import {MatSnackBar} from '@angular/material';

export namespace Notification {
  export type Type = 'ERROR' | 'NOTIFICATION' | 'WARNING';
  export const Type = {
    ERROR: 'ERROR' as Type,
    NOTIFICATION: 'NOTIFICATION' as Type,
    WARNING: 'WARNING' as Type
  };

  export class NotificationMessage {
    text: string;
    type: Type = Type.ERROR;
    image?: string;

    constructor(obj: Partial<NotificationMessage>) {
      Object.assign(this, obj);
    }
  }
}

@Injectable()
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<NotificationMessage[]>([]);
  notifications = this.notificationsSubject.asObservable();

  constructor(public snackBar: MatSnackBar) {
  }

  addNotification(message: NotificationMessage) {
    const notificationMessages = <NotificationMessage[]> this.notificationsSubject.getValue();
    notificationMessages.push(message)
    this.notificationsSubject.next(notificationMessages);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
