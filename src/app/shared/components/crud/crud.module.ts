import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {MainComponent} from './main/main.component';
import {ListItemComponent} from './list-item/list-item.component';
import {ListItemButtonsComponent} from './list-item-buttons/list-item-buttons.component';
import {MaterialModule} from '../../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    ListComponent,
    MainComponent,
    ListItemComponent,
    ListItemButtonsComponent
  ],
  exports: [
    MainComponent
  ]
})
export class CrudModule {
}
