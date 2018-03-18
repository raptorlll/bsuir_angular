import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'crud-list-item-buttons',
  templateUrl: './list-item-buttons.component.html'
})
export class ListItemButtonsComponent<T> implements OnInit {
  @Input() item: T;

  constructor() {
  }

  ngOnInit() {
  }

}
