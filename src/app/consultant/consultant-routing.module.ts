import {InformationComponent} from './components/information/information.component';
import {AuthGuard} from './../shared/guards/auth-guard.service';
import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {crudRoutes} from '../shared/components/generators/crudGenerator';
import {ConsultantResolverService} from './services/consultant-resolver.service';

const routes = [
  {
    path: 'consultant_information',
    component: InformationComponent,
    canActivate: [AuthGuard],
    children: crudRoutes(ConsultantResolverService)
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
    ConsultantResolverService
  ]
})
export class ConsultantRoutingModule {
}
