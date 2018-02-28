import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CurrentUserService } from '../services/current-user.service';
import { TokenStoreService } from '../services/token-store.service';
import { AuthGuard } from '../guards/auth-guard.service';
import { GuestGuard } from '../guards/guest-guard.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  declarations: [
  ],
  providers: [
    CurrentUserService,
    TokenStoreService,
    AuthGuard,
    GuestGuard
  ]
})
export class SharedModule { }
