import {Component, OnInit} from '@angular/core';
import {Page} from '../../generators/crudPage';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';
import {CrudViewProviderService} from '../../../services/crud-view-provider.service';
import {GenericId} from '../../../models';

@Component({
  selector: 'crud-footer',
  template: `
    <footer>
      <container>
        <row>
          <column xs="6">
            <button mat-button *ngIf="showCreate" [routerLink]="['/', routeName, 'create']">
              Create
            </button>
          </column>
        </row>
      </container>
    </footer>
  `,
  styles: []
})
export class FooterComponent<T extends GenericId> implements OnInit {
  page: Page.Type = Page.Type.HOME;
  routeName: string;

  constructor(private activatedRoute: ActivatedRoute,
              private crudViewProviderService: CrudViewProviderService<T>) {
    this.routeName = crudViewProviderService.routeName();
  }

  ngOnInit() {
    this.activatedRoute
      .firstChild
      .data
      .subscribe((a) => {
        this.page = _.result(a, 'type', Page.Type.HOME);
      });
  }

  get showCreate(): boolean {
    return this.page !== Page.Type.CREATE;
  }
}
