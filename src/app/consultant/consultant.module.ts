import {forwardRef, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { InformationComponent } from './information/information.component';
import { ConsultantRoutingModule } from './consultant-routing.module';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ConsultantRoutingModule,
        SharedModule
    ],
    declarations: [
        InformationComponent
    ],
    providers: [
    ]
})
export class ConsultantModule {
}
