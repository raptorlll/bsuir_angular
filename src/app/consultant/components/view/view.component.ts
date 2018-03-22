import { Component, OnInit } from '@angular/core';
import {ConsultantInformation} from '../../../shared/models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view',
  template: `
    <crud-view-item *ngIf="!!item" [item]="item"></crud-view-item>
  `,
  styles: []
})
export class ViewComponent implements OnInit {
  item: ConsultantInformation;

  constructor(private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.activatedRoute
      .data
      .subscribe((a) => {
        this.item = a.item;
      });
  }
}
