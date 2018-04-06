import {Injectable} from '@angular/core';
import {CrudViewProviderService} from '../../shared/services/crud-view-provider.service';
import {BaseListItem} from '../../shared/components/crud/list-item/base-list-item';
import {ListItemComponent} from '../components/list-item/list-item.component';
import {ConsultantInformation} from '../../shared/models';
import {EditComponent} from '../components/edit/edit.component';
import {ViewComponent} from '../components/view/view.component';

@Injectable()
export class ConsultantViewProviderService extends CrudViewProviderService<ConsultantInformation> {
  routeName = () => 'consultant_information';

  getListItemComponent = () => ListItemComponent;

  getEditItemComponent = () => EditComponent;

  getViewItemComponent = () => ViewComponent;

  isReadOnly = () => false;
}
