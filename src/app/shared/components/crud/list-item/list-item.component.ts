import {Component, OnInit, Input, ViewContainerRef, ViewChild, AfterContentInit} from '@angular/core';
import {CrudViewService} from '../../../services/crud-view.service';
import {CrudViewProviderService} from '../../../services/crud-view-provider.service';

@Component({
  selector: 'list-crud-item',
  template: `
    <div #container></div>
  `,
  styles: []
})
export class ListItemComponent<T> implements OnInit, AfterContentInit {
  @Input() item: T;
  @ViewChild('container', {read: ViewContainerRef}) container;

  constructor(private crudViewService: CrudViewService,
              private crudViewProviderService: CrudViewProviderService<T>) {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.crudViewService.loadComponent(
      this.container,
      this.crudViewProviderService.getListItemComponent(),
      this.item);
  }

}
