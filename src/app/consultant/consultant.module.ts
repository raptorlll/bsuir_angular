import {forwardRef, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { InformationComponent } from './information/information.component';
import { ConsultantRoutingModule } from './consultant-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
    imports: [
        CommonModule,
        ConsultantRoutingModule
    ],
    declarations: [
        InformationComponent,
        ListComponent
    ],
    providers: [
    ]
})
export class ConsultantModule {
}
