import { ReportsViewProviderService } from './services/reports-view-provider.service';
import { forwardRef } from '@angular/core';
import { CrudViewProviderService } from '../shared/services/crud-view-provider.service';
import { GenericCrudService } from '../shared/api/api-services/generic-crud.service';
import { ReportsFormHelperService } from './services/reports-form-helper.service';
import { FieldsHelperService } from '../shared/services/fields-helper.service';
import { ReportsInformationService } from '../shared/api/api-services/reports-information.service';

export const reportsInformationProviders = () => [
  {
    provide: GenericCrudService,
    useExisting: forwardRef(() => ReportsInformationService),
  },
  {
    provide: CrudViewProviderService,
    useExisting: forwardRef(() => ReportsViewProviderService),
  },
  {
    provide: FieldsHelperService,
    useExisting: forwardRef(() => ReportsFormHelperService),
  },
];
