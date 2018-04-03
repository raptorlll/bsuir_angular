import {ConsultantInformationService} from '../shared/api/api-services/consultant-information.service';
import {ConsultantViewProviderService} from './services/consultant-view-provider.service';
import {forwardRef} from '@angular/core';
import {CrudViewProviderService} from '../shared/services/crud-view-provider.service';
import {GenericCrudService} from '../shared/api/api-services/generic-crud.service';
import {ConsultantFormHelperService} from "./services/consultant-form-helper.service";
import {FieldsHelperService} from "../shared/services/fields-helper.service";

export const consultantInformationProviders = () => {
  return [
    {
      provide: GenericCrudService,
      useExisting: forwardRef(() => ConsultantInformationService)
    },
    {
      provide: CrudViewProviderService,
      useExisting: forwardRef(() => ConsultantViewProviderService)
    },
    {
      provide: FieldsHelperService,
      useExisting: forwardRef(() => ConsultantFormHelperService)
    }
  ];
};
