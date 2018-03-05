import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TokenStoreService } from '../services/token-store.service';
import { TokenKeys } from '../enums/token-keys.enum';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public tokenStoreService: TokenStoreService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenStoreService.getItem(TokenKeys.USER_KEY);

    if (token){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}