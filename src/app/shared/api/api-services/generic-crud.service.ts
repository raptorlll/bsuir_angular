import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {UserControllerService} from '../generated/index';
import {User} from '../../models/user.model';
import {UserJsonConvertorService} from '../../convertors/user-json-convertor.service';
import {TokenStoreService} from '../../services/token-store.service';
import {TokenKeys} from '../../enums/token-keys.enum';
import {ConvertorInterface} from '../../convertors/convertor-interface';
import {identifierName} from '@angular/compiler';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';
import {GenericId} from '../../models';

@Injectable()
export abstract class GenericCrudService<Model extends GenericId, SwaggerModel> {
  constructor() {
  }

  abstract convertor: ConvertorInterface<Model, SwaggerModel>;

  protected abstract getItemServer: (identifier: number) => Observable<SwaggerModel>;
  protected abstract getItemsServer: () => Observable<SwaggerModel[]>;
  protected abstract deleteItemServer: (identifier: number) => Observable<any>;
  protected abstract updateItemServer: (identifier: number, model: SwaggerModel) => Observable<SwaggerModel>;
  protected abstract createItemServer: (model: SwaggerModel) => Observable<SwaggerModel>;
  protected items: BehaviorSubject<Model[]> = new BehaviorSubject<Model[]>([]);
  protected itemsLoaded: boolean = false;

  getItem: (identifier: number) => Observable<Model> = (identifier: number) => {
    return this.getItemServer(identifier)
      .map((model: SwaggerModel) => this.convertor.convertFromSwagger(model));
      // .do(this.replaceFromItems);
  };

  getItems: () => Observable<Model[]> = () => {
    if (!this.items.getValue().length) {
      this.getItemsServer()
        .map((models: SwaggerModel[]) => models.map(this.convertor.convertFromSwagger))
        .subscribe((data: Model[]) => {
          this.items.next(data);
        });
    }

    return this.items.asObservable();
  };

  deleteItem: (identifier: number) => Observable<any> = (identifier: number) => {
    return this.deleteItemServer(identifier)
      .do(() => this.removeFromItems(<Model> {id: identifier}));
  };

  updateItem: (identifier: number, model: Model) => Observable<Model> = (identifier: number, model: Model) => {
    return this.updateItemServer(identifier, this.convertor.convertToSwagger(model))
      .map((modelIn: SwaggerModel) => this.convertor.convertFromSwagger(modelIn))
      .do(this.replaceFromItems);
  };

  createItem: (identifier: number, model: Model) => Observable<Model> = (identifier: number, model: Model) => {
    return this.createItemServer(this.convertor.convertToSwagger(model))
      .map((modelIn: SwaggerModel) => this.convertor.convertFromSwagger(modelIn))
      .do(this.addToItems);
  };


  removeFromItems = (item: Model): void => {
    const values = this.items.getValue();
    values.splice(_.findIndex(values, {id: item.id}), 1);

    this.items.next(values);
  };

  replaceFromItems = (item: Model): void => {
    const values = this.items.getValue();
    values.splice(_.findIndex(values, {id: item.id}), 1, item);

    this.items.next(values);
  };

  addToItems = (item: Model): void => {
    const values = this.items.getValue();
    values.push(item);
    this.items.next(values);
  };
}
