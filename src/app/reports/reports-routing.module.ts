import { InformationComponent } from './components/information/information.component';
import { AuthGuard } from './../shared/guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { crudRoutes } from '../shared/components/generators/crudGenerator';
import { ConsultantResolverService } from './services/reports-resolver.service';
import { ReportsViewProviderService } from './services/reports-view-provider.service';

const routes = [
  {
    path: ReportsViewProviderService.ROUTE_NAME,
    component: InformationComponent,
    canActivate: [AuthGuard],
    children: crudRoutes(ConsultantResolverService),
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    ConsultantResolverService,
  ],
})
export class ConsultantRoutingModule {
}
