import {Component, OnInit, forwardRef} from '@angular/core';
import {ConsultantInformationControllerService} from '../../../shared/api/generated/index';
import {ConsultantInfomationConvertorService} from '../../../shared/convertors/consultant-information-convertor.service';
import {GenericCrudService} from '../../../shared/api-services/generic-crud.service';
import {ConsultantInformationService} from '../../../shared/api-services/consultant-information.service';
import {ConsultantViewProviderService} from '../../services/consultant-view-provider.service';
import {CrudViewProviderService} from '../../../shared/services/crud-view-provider.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  providers: [
    {
      provide: GenericCrudService,
      useExisting: forwardRef(() => ConsultantInformationService)
    },
    {
      provide: CrudViewProviderService,
      useExisting: forwardRef(() => ConsultantViewProviderService)
    }
  ]
})
export class InformationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }
}
