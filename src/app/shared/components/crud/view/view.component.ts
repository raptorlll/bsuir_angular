import {AfterContentInit, Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {CrudViewProviderService} from '../../../services/crud-view-provider.service';
import {CrudViewService} from '../../../services/crud-view.service';
import {GenericId} from '../../../models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'crud-view-item',
  template: `
    <mat-card>
      <mat-card-header>
        View of item with id {{item.id}}
      </mat-card-header>
      <div class="separator">
        <mat-divider></mat-divider>
      </div>
      <mat-card-content>
        <div #container></div>
      </mat-card-content>
    </mat-card>
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
        this.ngAfterContentInit();
      });
  }

  ngAfterContentInit(): void {
    this.crudViewService.loadComponent(
      this.container,
      this.crudViewProviderService.getViewItemComponent(),
      this.item);
  }
}
