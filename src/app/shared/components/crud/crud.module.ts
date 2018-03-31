import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {MainComponent} from './main/main.component';
import {ListItemComponent} from './list-item/list-item.component';
import {ListItemButtonsComponent} from './list-item-buttons/list-item-buttons.component';
import {MaterialModule} from '../../material/material.module';
import {RouterModule} from '@angular/router';
import {ViewComponent} from './view/view.component';
import {EditComponent} from './edit/edit.component';
import { FooterComponent } from './footer/footer.component';
import {DateInputDirective} from '../../directives/date-input.directive';
import {DateTimeInputDirective} from '../../directives/date-time-input.directive';
import {TimeInputDirective} from '../../directives/time-input.directive';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    ListComponent,
    MainComponent,
    ListItemComponent,
    ListItemButtonsComponent,
    ViewComponent,
    EditComponent,
    FooterComponent,
    DateInputDirective,
    DateTimeInputDirective,
    TimeInputDirective
  ],
  exports: [
    MainComponent,
    ViewComponent,
    EditComponent,
    DateInputDirective,
    DateTimeInputDirective,
    TimeInputDirective
  ]
})
export class CrudModule {
}
