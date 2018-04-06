import { Component } from '@angular/core';
import { BaseListItem } from '../../../shared/components/crud/list-item/base-list-item';
import { FieldsHelperService } from '../../../shared/services/fields-helper.service';
import { Report } from '../../../shared/models/report.model';

@Component({
  selector: 'reports-view',
  template: `
    <div *ngIf='item' class='item-list'>
      <span>{{label('date')}} {{item.date}} </span>
      <span>{{label('messageCount')}} {{item.messageCount}}</span>
      <span>{{label('paymentsCount')}} {{item.paymentsCount}}</span>
      <span>{{label('sum')}} {{item.sum}}</span>
    </div>
  `,
})
export class ViewComponent extends BaseListItem<Report> {
  constructor(private fieldsFactoryService: FieldsHelperService) {
    super();
  }

  label = this.fieldsFactoryService.getLabel;
}
