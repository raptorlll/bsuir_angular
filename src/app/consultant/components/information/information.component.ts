import {Component, OnInit, forwardRef} from '@angular/core';
import {ConsultantInformationControllerService} from '../../../shared/api/generated/index';
import {ConsultantInfomationConvertorService} from '../../../shared/convertors/consultant-information-convertor.service';
import {GenericCrudService} from '../../../shared/api/api-services/generic-crud.service';
import {ConsultantInformationService} from '../../../shared/api/api-services/consultant-information.service';
import {ConsultantViewProviderService} from '../../services/consultant-view-provider.service';
import {CrudViewProviderService} from '../../../shared/services/crud-view-provider.service';
import {consultantInformationProviders} from '../../consultant-providers';

@Component({
  selector: 'app-information',
  template: `
    <app-crud-main>
      <consultant-list-item></consultant-list-item>
    </app-crud-main>
  `,
  providers: consultantInformationProviders()
})
export class InformationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }
}
