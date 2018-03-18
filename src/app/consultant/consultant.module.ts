import {forwardRef, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformationComponent} from './components/information/information.component';
import {ConsultantRoutingModule} from './consultant-routing.module';
import {SharedModule} from '../shared/shared/shared.module';
import {ListItemComponent as ConsultantListItemComponent, ListItemComponent} from './components/list-item/list-item.component';
import {ConsultantViewProviderService} from './services/consultant-view-provider.service';

@NgModule({
  imports: [
    CommonModule,
    ConsultantRoutingModule,
    SharedModule
  ],
  declarations: [
    InformationComponent,
    ListItemComponent
  ],
  entryComponents: [
    ConsultantListItemComponent
  ],
  providers: [
    ConsultantViewProviderService
  ]
})
export class ConsultantModule {
}
