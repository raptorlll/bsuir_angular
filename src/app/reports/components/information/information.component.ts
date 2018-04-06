import { Component, OnInit } from '@angular/core';
import { reportsInformationProviders } from '../../reports-providers';
import { ReportsInformationService } from "../../../shared/api/api-services/reports-information.service";
import { NotificationService } from "../../../shared/services/notification.service";

@Component({
  selector: 'app-information',
  template: `
    <container>
      <row>
        <column sm="6">
          <app-crud-list></app-crud-list>
        </column>
        <column sm="6">
          <router-outlet></router-outlet>
        </column>
      </row>
    </container>
    <crud-footer>
      <button mat-button (click)="sendReport()">
        Send report
      </button>
    </crud-footer>
  `,
  providers: reportsInformationProviders(),
})
export class InformationComponent {

  constructor(private storeService: ReportsInformationService,
              private notificationService: NotificationService) {
  }

  sendReport() {
    this.storeService.sendReport()
      .subscribe(() => {
        this.notificationService.openSnackBar('Report had been sended', '');
      });
  }
}
