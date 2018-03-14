import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent, MainComponent, ListItemComponent],
  exports: [
    MainComponent
  ]
})
export class CrudModule { }
