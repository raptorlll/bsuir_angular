import { InformationComponent } from './information/information.component';
import { AuthGuard } from './../shared/guards/auth-guard.service';
import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

const routes = [
    {
        path: 'consultant_information',
        component: InformationComponent,
        // canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})
export class ConsultantRoutingModule {
}