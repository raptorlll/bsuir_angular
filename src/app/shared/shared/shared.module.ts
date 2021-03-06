import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CurrentUserService } from '../services/current-user.service';
import { TokenStoreService } from '../services/token-store.service';
import { AuthGuard } from '../guards/auth-guard.service';
import { GuestGuard } from '../guards/guest-guard.service';
import { ApiModule } from '../api/generated';
import { BASE_PATH } from '../api/generated/variables';
import { ApiCommunicationService } from '../api/api-services/api-communication.service';
import { environment } from '../../../environments/environment';
import { ConvertorsModule } from '../convertors/convertors.module';
import { NavbarService } from '../services/navbar.service';
import { ConsultantInformationService } from '../api/api-services/consultant-information.service';
import { CrudModule } from '../components/crud/crud.module';
import { CrudViewService } from '../services/crud-view.service';
import { PreloaderService } from '../services/preloader.service';
import { NotificationService } from '../services/notification.service';
import { ConsultantGroupUserService } from '../api/api-services/consultant-group-user.service';
import { ReportsInformationService } from '../api/api-services/reports-information.service';

export const BasePathEnv = { provide: BASE_PATH, useValue: environment.api_location };

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ConvertorsModule,
    ApiModule,
    CrudModule,
  ],
  exports: [
    MaterialModule,
    CrudModule,
  ],
  declarations: [],
  providers: [
    BasePathEnv,
    CurrentUserService,
    CrudViewService,
    TokenStoreService,
    AuthGuard,
    GuestGuard,
    ApiCommunicationService,
    ConsultantInformationService,
    ConsultantGroupUserService,
    NavbarService,
    PreloaderService,
    NotificationService,
    ReportsInformationService,
  ],
})
export class SharedModule {
}
