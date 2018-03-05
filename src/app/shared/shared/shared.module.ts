import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CurrentUserService } from '../services/current-user.service';
import { TokenStoreService } from '../services/token-store.service';
import { AuthGuard } from '../guards/auth-guard.service';
import { GuestGuard } from '../guards/guest-guard.service';
import {ApiModule} from '../api/generated';
import {BASE_PATH} from '../api/generated/variables';
import { ApiCommunicationService } from '../api-services/api-communication.service';
import { environment } from '../../../environments/environment';
import {ConvertorsModule} from '../convertors/convertors.module'
import { NavbarService } from '../services/navbar.service';

export const BasePathEnv = { provide: BASE_PATH, useValue: environment.api_location };

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ConvertorsModule,
    ApiModule
  ],
  exports: [ 
    MaterialModule
  ],
  declarations: [
  ],
  providers: [
    BasePathEnv,
    CurrentUserService,
    TokenStoreService,
    AuthGuard,
    GuestGuard,
    ApiCommunicationService,
    NavbarService
  ]
})
export class SharedModule { }
