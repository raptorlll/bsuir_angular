import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {UserControllerService} from '../api/generated';
import {User} from '../models/user.model';
import {UserJsonConvertorService} from '../convertors/user-json-convertor.service';
import {TokenStoreService} from '../services/token-store.service';
import {TokenKeys} from '../enums/token-keys.enum';
import {ConvertorInterface} from '../convertors/convertor-interface';
import {identifierName} from '@angular/compiler';


@Injectable()
export abstract class GenericCrudService<Model, SwaggerModel> {
  constructor() {
  }

  abstract convertor: ConvertorInterface<Model, SwaggerModel>;

  abstract getItemServer: (identifier: number) => Observable<SwaggerModel>;
  abstract getItemsServer: () => Observable<SwaggerModel[]>;
  abstract deleteItemServer: (identifier: number) => Observable<any>;
  abstract updateItemServer: (identifier: number, model: SwaggerModel) => Observable<SwaggerModel>;
  abstract createItemServer: (model: SwaggerModel) => Observable<SwaggerModel>;

  getItem: (identifier: number) => Observable<Model> = (identifier: number) => {
    return this.getItemServer(identifier)
      .map((model: SwaggerModel) => this.convertor.convertFromSwagger(model));
  };

  getItems: () => Observable<Model[]> = () => {
    return this.getItemsServer()
      .map((models: SwaggerModel[]) => models.map(this.convertor.convertFromSwagger));
  };

  deleteItem: (identifier: number) => Observable<any> = (identifier: number) => {
    return this.deleteItemServer(identifier);
  };

  updateItem: (identifier: number, model: Model) => Observable<Model> = (identifier: number, model: Model) => {
    return this.updateItemServer(identifier, this.convertor.convertToSwagger(model))
      .map((modelIn: SwaggerModel) => this.convertor.convertFromSwagger(modelIn));
  };

  createItem: (identifier: number, model: Model) => Observable<Model> = (identifier: number, model: Model) => {
    return this.createItemServer(this.convertor.convertToSwagger(model))
      .map((modelIn: SwaggerModel) => this.convertor.convertFromSwagger(modelIn));
  };

}
