import { Component, OnInit } from '@angular/core';
import {ConsultantInformation} from '../../../shared/models';
import {ActivatedRoute} from '@angular/router';
import {BaseListItem} from '../../../shared/components/crud/list-item/base-list-item';

@Component({
  selector: 'app-view',
  template: `
    <crud-edit-item *ngIf="!!item" [item]="item"></crud-edit-item>
  `,
  styles: []
})
export class EditComponent extends BaseListItem<ConsultantInformation> implements OnInit{

  item: ConsultantInformation;

  constructor(private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.activatedRoute
      .data
      .subscribe((a) => {
        this.item = a.item;
      });
  }
}
