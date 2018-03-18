import {Component, forwardRef, OnInit} from '@angular/core';
import {ListItemComponent as CrudListItemComponent} from '../../../shared/components/crud/list-item/list-item.component';
import {ConsultantInformation} from '../../../shared/models/index';
import {BaseListItem} from '../../../shared/components/crud/list-item/base-list-item';

@Component({
  selector: 'consultant-list-item',
  templateUrl: './list-item.component.html',
  providers: [{provide: BaseListItem, useExisting: forwardRef(() => ListItemComponent)}]
})
export class ListItemComponent extends BaseListItem<ConsultantInformation> {
}
