import {Component, OnInit} from '@angular/core';
import {ConsultantInformation} from '../../../shared/models';
import {ActivatedRoute} from '@angular/router';
import {BaseListItem} from '../../../shared/components/crud/list-item/base-list-item';
import {FieldsHelperService} from "../../../shared/services/fields-helper.service";

@Component({
  selector: 'consultant-view',
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
  styles: []
})
export class ViewComponent extends BaseListItem<ConsultantInformation> {
  constructor(private fieldsFactoryService: FieldsHelperService) {
    super();
  }

  label = this.fieldsFactoryService.getLabel;
}
