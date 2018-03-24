import {AfterContentInit, Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {CrudViewProviderService} from '../../../services/crud-view-provider.service';
import {CrudViewService} from '../../../services/crud-view.service';
import {GenericId} from '../../../models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'crud-view-item',
  template: `
    <div>
      <h2>View of item with id {{item.id}}</h2>
      <hr />
      <div #container></div>
    </div>
  `,
  styles: []
})
export class ViewComponent<T extends GenericId> implements OnInit, AfterContentInit {
  item: T;
  @ViewChild('container', {read: ViewContainerRef}) container;

  constructor(private activatedRoute: ActivatedRoute,
              private crudViewService: CrudViewService,
              private crudViewProviderService: CrudViewProviderService<T>) {
  }

  ngOnInit() {
    this.activatedRoute
      .data
      .subscribe((a) => {
        this.item = a.item;
      });
  }

  ngAfterContentInit(): void {
    this.crudViewService.loadComponent(
      this.container,
      this.crudViewProviderService.getViewItemComponent(),
      this.item);
  }
}
