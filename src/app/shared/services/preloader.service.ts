import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PreloaderService {
  private stack: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() {
  }

  initPreloader = (identifier?: string) => {
    const id = identifier ? identifier : this.randomString();
    const stack = _.cloneDeep(this.stack.getValue());

    stack.push(id);
    this.stack.next(stack);

    return () => {
      this.disablePreloader(id);
    };
  };

  disablePreloader = (identifier?: string) => {
    const stack = _.cloneDeep(this.stack.getValue());

    _.remove(stack, (id: string) => id === identifier);
    this.stack.next(stack);
  };

  private randomString = () => {
    return '' + Math.random();
  };

  get isLoading(): Observable<boolean> {
    return this.stack
      .switchMap((stack: string[]) => Observable.of(!!stack.length));
  }
}

