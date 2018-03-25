import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {
  ConsultantGroupUserControllerService,
  ConsultantGroupUser as SwaggerConsultantGroupUser
} from '../generated/index';
import {GenericCrudService} from './generic-crud.service';
import {ConsultantGroupUser} from '../../models/consultant-group-user.model';
import {ConsultantGroupUserConvertorService} from '../../convertors/consultant-group-user-convertor.service';


@Injectable()
export class ConsultantGroupUserService extends GenericCrudService<ConsultantGroupUser, SwaggerConsultantGroupUser> {
  constructor(public convertor: ConsultantGroupUserConvertorService,
              private apiService: ConsultantGroupUserControllerService) {
    super();
  }

  protected getItemServer = (identifier: number) => this.apiService.getItemUsingGET1(identifier);
  protected getItemsServer = () => <Observable<SwaggerConsultantGroupUser[]>>this.apiService.getItemsUsingGET1();
  protected deleteItemServer = (identifier: number) => this.apiService.deleteItemUsingDELETE1(identifier);
  protected updateItemServer = (identifier: number, model: any) => this.apiService.updateItemUsingPUT1(identifier, model);
  protected createItemServer = (model: any) => this.apiService.saveItemUsingPOST1(model);
}
