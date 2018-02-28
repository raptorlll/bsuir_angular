import { Injectable } from '@angular/core';
import { TokenStoreService } from './token-store.service';
import { TokenKeys } from '../enums/token-keys.enum';

@Injectable()
export class CurrentUserService {
  constructor(
    private tokenStoreService: TokenStoreService
  ) { }

  get isAuthorised(): boolean {
    const isAuth = this.tokenStoreService.getItem(TokenKeys.USER_KEY, false);

    return !!isAuth;
  }
}
