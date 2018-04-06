import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './components/information/information.component';
import { ConsultantRoutingModule } from './reports-routing.module';
import { SharedModule } from '../shared/shared/shared.module';
import { ListItemComponent as ConsultantListItemComponent, ListItemComponent } from './components/list-item/list-item.component';
import { ReportsViewProviderService } from './services/reports-view-provider.service';
import { ViewComponent } from './components/view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportsFormHelperService } from './services/reports-form-helper.service';

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
  ],
  entryComponents: [
    ConsultantListItemComponent,
    ViewComponent,
  ],
  providers: [
    ReportsViewProviderService,
    ReportsFormHelperService,
  ],
})
export class ReportsModule {
}
