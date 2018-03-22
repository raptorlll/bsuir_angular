import {BaseListItem} from '../components/crud/list-item/base-list-item';
import {GenericId} from '../models';

export abstract class CrudViewProviderService<T extends GenericId> {
  abstract getListItemComponent: () => { new (): any };

  abstract getEditItemComponent: () => { new (): any };

  abstract routeName: () => string;
}
