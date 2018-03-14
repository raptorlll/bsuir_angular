import { Component, OnInit } from '@angular/core';
import { GenericCrudService } from '../../../api-services/generic-crud.service';
import { ConsultantInformation } from '../../../models';

@Component({
  selector: 'app-crud-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  items: ConsultantInformation[];

  constructor(private store: GenericCrudService<any, any>) { }

  ngOnInit() {
    this.store.getItems()
      .subscribe((items: ConsultantInformation[]) => {
        this.items = items;
      });
  }

}
