import {Component, OnInit, Input} from '@angular/core';

export abstract class BaseListItem<T> {
  item: T;
}
