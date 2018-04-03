import {Component, forwardRef, OnInit} from '@angular/core';
import {ListItemComponent as CrudListItemComponent} from '../../../shared/components/crud/list-item/list-item.component';
import {ConsultantInformation} from '../../../shared/models/index';
import {BaseListItem} from '../../../shared/components/crud/list-item/base-list-item';
import {FieldsHelperService} from "../../../shared/services/fields-helper.service";

@Component({
  selector: 'consultant-list-item',
  template: `
    <div *ngIf="item" class="item-list">
      <span>{{label('availableFrom')}} {{item.availableFrom}} </span>
      <span>{{label('availableUntil')}} {{item.availableUntil}}</span>
      <span>{{label('consultantGroupUser')}} {{item.consultantGroupUser.user.firstName}}</span>
      <span>{{label('degree')}} {{item.degree}}</span>
      <span>{{label('education')}} {{item.education}}</span>
      <span>{{label('id')}} {{item.id}}</span>
      <span>{{label('licenseFile')}} {{item.licenseFile}}</span>
      <span>{{label('licenseNumber')}} {{item.licenseNumber}}</span>
      <span>{{label('licenseUntil')}} {{item.licenseUntil}}</span>
    </div>
  `,
  providers: [{provide: BaseListItem, useExisting: forwardRef(() => ListItemComponent)}]
})
export class ListItemComponent extends BaseListItem<ConsultantInformation> {
  constructor(private fieldsFactoryService: FieldsHelperService) {
    super();
  }

  label = this.fieldsFactoryService.getLabel;
}
