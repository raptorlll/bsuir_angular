import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {
  UserControllerService,
  ConsultantInformationControllerService,
  ConsultantInformation as SwaggerConsultantInformation
} from '../generated/index';
import {User} from '../../models/user.model';
import {UserJsonConvertorService} from '../../convertors/user-json-convertor.service';
import {TokenStoreService} from '../../services/token-store.service';
import {TokenKeys} from '../../enums/token-keys.enum';
import {GenericCrudService} from './generic-crud.service';
import {ConsultantInformation} from '../../models/index';
import {ConsultantInfomationConvertorService} from '../../convertors/consultant-information-convertor.service';
import {ConvertorInterface} from '../../convertors/convertor-interface';


@Injectable()
export class ConsultantInformationService extends GenericCrudService<ConsultantInformation, SwaggerConsultantInformation> {

  // convertor: ConvertorInterface<ConsultantInformation, SwaggerConsultantInformation>;

  constructor(public convertor: ConsultantInfomationConvertorService,
              private apiService: ConsultantInformationControllerService) {
    super();
  }


  protected getItemServer = (identifier: number) => this.apiService.getItemUsingGET2(identifier);
  protected getItemsServer = () => <Observable<SwaggerConsultantInformation[]>>this.apiService.getItemsUsingGET2();
  protected deleteItemServer = (identifier: number) => this.apiService.deleteItemUsingDELETE2(identifier);
  protected updateItemServer = (identifier: number, model: any) => this.apiService.updateItemUsingPUT2(identifier, model);
  protected createItemServer = (model: any) => this.apiService.saveClientInformationWithFileUsingPOST(model);
}
