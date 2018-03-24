import {Component, OnInit} from '@angular/core';
import {ConsultantInformation} from '../../../shared/models';
import {ActivatedRoute} from '@angular/router';
import {BaseListItem} from '../../../shared/components/crud/list-item/base-list-item';

@Component({
  selector: 'consultant-view',
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
  styles: []
})
export class ViewComponent extends BaseListItem<ConsultantInformation> {

}
