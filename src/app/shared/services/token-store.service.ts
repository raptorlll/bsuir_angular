import { Injectable } from '@angular/core';
import { TokenKeys } from '../enums/token-keys.enum';

@Injectable()
export class TokenStoreService {
  constructor() {

  }

  getItem(key: TokenKeys, defaultValue?: any): any {
    return !!localStorage.getItem(key as string) ?
      JSON.parse(localStorage.getItem(key as string)) :
      defaultValue;
  }

  setItem(key: TokenKeys, value: any): void {
    localStorage.setItem(key as string, JSON.stringify(value));
  }

  removeItem(key: TokenKeys): any {
    localStorage.removeItem(key as string);
  }
}
