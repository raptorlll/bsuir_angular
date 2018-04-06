import { Injectable } from '@angular/core';
import { CrudViewProviderService } from '../../shared/services/crud-view-provider.service';
import { ListItemComponent } from '../components/list-item/list-item.component';
import { ConsultantInformation } from '../../shared/models';

@Injectable()
export class ReportsViewProviderService extends CrudViewProviderService<ConsultantInformation> {
  static ROUTE_NAME = 'consultant_reports';

  routeName = () => ReportsViewProviderService.ROUTE_NAME;

  getListItemComponent = () => ListItemComponent;

  getEditItemComponent = () => {
    throw new Error('Can`t edit');
  };

  getViewItemComponent = () => {
    throw new Error('Can`t view list');
  };

  isReadOnly = () => true;
}
