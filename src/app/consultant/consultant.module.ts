import {forwardRef, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { InformationComponent } from './information/information.component';
import { ConsultantRoutingModule } from './consultant-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ConsultantRoutingModule
    ],
    declarations: [
        InformationComponent
    ],
    providers: [
    ]
})
export class ConsultantModule {
}
