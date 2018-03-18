import {
  AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {BaseListItem} from '../list-item/base-list-item';
import * as _ from 'lodash';
import {CrudViewService} from '../../../services/crud-view.service';
import {CrudViewProviderService} from '../../../services/crud-view-provider.service';

@Component({
  selector: 'app-crud-main',
  templateUrl: './main.component.html'
})
export class MainComponent<T> implements OnInit, AfterViewInit, AfterContentInit {
  @ContentChildren(
    BaseListItem
    // , {read: ElementRef}
  ) listItem: QueryList<BaseListItem<T>>;

  @ViewChild('container', {read: ViewContainerRef}) container;

  constructor(private crudViewService: CrudViewService,
              private crudViewProviderService: CrudViewProviderService<T>) {
  }

  ngOnInit() {
    console.log('Items', this.listItem);
  }

  ngAfterViewInit() {
    console.log('Items', this.listItem);
  }

  ngAfterContentInit(): void {
    // this.crudViewService.loadComponentView(
    //   this.container,
    //   this.crudViewProviderService.getListItemComponent(),
    //   'text test');
  }

  get list(): string {
    return '';
    // return this.listItem ? this.listItem.map((f: ElementRef) => _.result(f, 'nativeElement.innerHTML', '')).join(', ') : '';
  }
}
