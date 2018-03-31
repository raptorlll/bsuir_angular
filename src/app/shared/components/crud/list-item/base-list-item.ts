import {EventEmitter} from '@angular/core';
import {Page} from '../../generators/crudPage';

export abstract class BaseListItem<T> {
  item: T;
}

export abstract class BaseListItemEdit<T> {
  item: T;
  /** Saved item */
  abstract savedEvent: EventEmitter<T>;
  type: Page.Type = Page.Type.CREATE;
}
