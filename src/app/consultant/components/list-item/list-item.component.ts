import {Component, forwardRef, OnInit} from '@angular/core';
import {ListItemComponent as CrudListItemComponent} from '../../../shared/components/crud/list-item/list-item.component';
import {ConsultantInformation} from '../../../shared/models/index';
import {BaseListItem} from '../../../shared/components/crud/list-item/base-list-item';

@Component({
  selector: 'consultant-list-item',
  template: `
    <div *ngIf="item" class="item-list">
      <span>availableFrom {{item.availableFrom}} </span>
      <span>availableUntil {{item.availableUntil}}</span>
      <span>consultantGroupUser {{item.consultantGroupUser.user.firstName}}</span>
      <span>degree {{item.degree}}</span>
      <span>education {{item.education}}</span>
      <span>id {{item.id}}</span>
      <span>licenseFile {{item.licenseFile}}</span>
      <span>licenseNumber {{item.licenseNumber}}</span>
      <span>licenseUntil {{item.licenseUntil}}</span>
    </div>
  `,
  providers: [{provide: BaseListItem, useExisting: forwardRef(() => ListItemComponent)}]
})
export class ListItemComponent extends BaseListItem<ConsultantInformation> {
}
