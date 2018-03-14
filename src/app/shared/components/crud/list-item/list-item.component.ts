import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'list-crud-item',
  templateUrl: './list-item.component.html',
  styles: []
})
export class ListItemComponent implements OnInit {
  @Input()
  item: any;

  constructor() { }

  ngOnInit() {
  }

}
