import {forwardRef, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformationComponent} from './components/information/information.component';
import {ConsultantRoutingModule} from './consultant-routing.module';
import {SharedModule} from '../shared/shared/shared.module';
import {ListItemComponent as ConsultantListItemComponent, ListItemComponent} from './components/list-item/list-item.component';
import {ConsultantViewProviderService} from './services/consultant-view-provider.service';
import {ViewComponent} from './components/view/view.component';
import {EditComponent} from './components/edit/edit.component';
import {RoutingModule} from '../routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ConsultantRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    InformationComponent,
    ListItemComponent,
    ViewComponent,
    EditComponent
  ],
  entryComponents: [
    ConsultantListItemComponent,
    ViewComponent,
    EditComponent
  ],
  providers: [
    ConsultantViewProviderService
  ]
})
export class ConsultantModule {
}
