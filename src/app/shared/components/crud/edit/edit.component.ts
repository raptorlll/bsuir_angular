import {AfterContentInit, Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {CrudViewProviderService} from '../../../services/crud-view-provider.service';
import {CrudViewService} from '../../../services/crud-view.service';
import {GenericId} from '../../../models';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../../services/notification.service';
import {Page} from '../../generators/crudPage';
import * as _ from 'lodash';

@Component({
  selector: 'crud-edit-item',
  template: `
    <mat-card>
      <mat-card-header>
        Edit of item with id {{item.id}}
      </mat-card-header>
      <mat-card-content>
        <div #container></div>
      </mat-card-content>
    </mat-card>
  `,
  styles: []
})
export class EditComponent<T extends GenericId> implements OnInit, AfterContentInit {
  item: T;
  type: Page.Type = Page.Type.CREATE;

  @ViewChild('container', {read: ViewContainerRef}) container;

  constructor(private activatedRoute: ActivatedRoute,
              private crudViewService: CrudViewService,
              private crudViewProviderService: CrudViewProviderService<T>,
              private router: Router,
              private notificationService: NotificationService,) {
  }

  ngOnInit() {
    this.activatedRoute
      .data
      .subscribe((a) => {
        this.assignDataFromRouter(a);
        this.ngAfterContentInit();
      });
  }

  assignDataFromRouter = data => {
    this.type = <Page.Type> _.result(data, 'type', Page.Type.CREATE);
    this.item = data.item;
  };

  ngAfterContentInit(): void {
    const component = this.crudViewService.loadComponentEdit(
      this.container,
      this.crudViewProviderService.getEditItemComponent(),
      this.item);

    component.type = this.type;
    component.savedEvent
      .subscribe((element: T) => {
        this.notificationService
          .openSnackBar('Data saved', '');
        /** Redirect to view page after */
        this.router.navigate([
          '/',
          this.crudViewProviderService.routeName(),
          element.id
        ]);
      });
  }
}
