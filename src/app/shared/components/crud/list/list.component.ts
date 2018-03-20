import {Component, OnInit} from '@angular/core';
import {GenericCrudService} from '../../../api-services/generic-crud.service';
import {ConsultantInformation} from '../../../models';

@Component({
  selector: 'app-crud-list',
  templateUrl: './list.component.html',
  styles: [`
    .crud-item{
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
  `]
})
export class ListComponent implements OnInit {

  items: ConsultantInformation[];

  constructor(private store: GenericCrudService<any, any>) {
  }

  ngOnInit() {
    this.store.getItems()
      .subscribe((items: ConsultantInformation[]) => {
        this.items = items;
      });
  }

}
