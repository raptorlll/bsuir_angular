import { Component, Input, OnInit } from '@angular/core';
import { GenericCrudService } from '../../../api/api-services/generic-crud.service';
import { ConsultantInformation } from '../../../models';
import { CrudViewProviderService } from '../../../services/crud-view-provider.service';

@Component({
  selector: 'app-crud-list',
  templateUrl: './list.component.html',
  styles: [`
    .crud-item {
      padding: 5px;
    }

    .list-item-buttons {
      min-width: 100px;
      width: 20%;
      display: inline-block;
      vertical-align: top;
    }

    .list-item-content {
      width: 79%;
      display: inline-block;
      vertical-align: top;
    }
  `],
})
export class ListComponent implements OnInit {
  items: ConsultantInformation[];
  private routeName: string;

  constructor(private store: GenericCrudService<any, any>,
              private crudViewProviderService: CrudViewProviderService<ConsultantInformation>) {
    this.routeName = crudViewProviderService.routeName();
  }

  ngOnInit() {
    this.store.getItems()
      .subscribe((items: ConsultantInformation[]) => {
        this.items = items;
      });
  }

  get isReadOnly(): boolean {
    return this.crudViewProviderService.isReadOnly();
  }
}
