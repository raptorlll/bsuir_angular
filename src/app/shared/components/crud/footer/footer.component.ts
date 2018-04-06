import { Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { Page } from '../../generators/crudPage';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { CrudViewProviderService } from '../../../services/crud-view-provider.service';
import { GenericId } from '../../../models';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'crud-footer',
  template: `
    <footer>
      <container>
        <row>
          <column xs="6">
            <div #ref>
              <ng-content></ng-content>
            </div>
            <div *ngIf="ref.children.length === 0">
              <button mat-button *ngIf="showCreate" [routerLink]="['/', routeName, 'create']">
                Create
              </button>
            </div>
          </column>
        </row>
      </container>
    </footer>
  `,
})
export class FooterComponent<T extends GenericId> implements OnInit {
  page: Page.Type = Page.Type.HOME;
  routeName: string;

  // @ContentChild(any) tabs: QueryList<any>;

  constructor(private activatedRoute: ActivatedRoute,
              private crudViewProviderService: CrudViewProviderService<T>) {
    this.routeName = crudViewProviderService.routeName();
  }

  ngOnInit() {
    (<Observable<any>>(_.result(this.activatedRoute.firstChild, 'data') || Observable.of(null)))
      .subscribe((a) => {
        this.page = _.result(a, 'type', Page.Type.HOME);
      });
  }

  get showCreate(): boolean {
    return this.page !== Page.Type.CREATE;
  }
}
