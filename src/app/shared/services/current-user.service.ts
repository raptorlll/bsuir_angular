import {Injectable} from '@angular/core';
import {TokenStoreService} from './token-store.service';
import {TokenKeys} from '../enums/token-keys.enum';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CurrentUserService {
  reloadUserEvent: Subject<boolean> = new Subject();

  constructor(private tokenStoreService: TokenStoreService) {
  }

  get isAuthorised(): Observable<boolean> {
    return Observable.of(null)
      .merge(this.reloadUserEvent)
      .switchMap(() => {
        console.log('Reloaded');
        const isAuth = this.tokenStoreService.getItem(TokenKeys.USER_KEY, false);

        return Observable.of(!!isAuth);
      });
  }

  logout() {
    this.tokenStoreService.removeItem(TokenKeys.USER_KEY);
    this.reloadUserEvent.next(false);
  }
}
