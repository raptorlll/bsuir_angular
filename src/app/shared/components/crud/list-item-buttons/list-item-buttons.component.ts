import {Component, Input, OnInit} from '@angular/core';
import {CrudViewProviderService} from '../../../services/crud-view-provider.service';
import {GenericId} from '../../../models';

@Component({
  selector: 'crud-list-item-buttons',
  templateUrl: './list-item-buttons.component.html'
})
export class ListItemButtonsComponent<T extends GenericId> implements OnInit {
  @Input() item: T;
  routeName: string;
  constructor(private crudViewProviderService: CrudViewProviderService<T>) {
    this.routeName = crudViewProviderService.routeName();
  }

  ngOnInit() {
  }

  onDelete() {
    console.log('delete');
  }
}
