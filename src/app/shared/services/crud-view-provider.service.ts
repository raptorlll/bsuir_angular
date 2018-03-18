import {BaseListItem} from '../components/crud/list-item/base-list-item';

export abstract class CrudViewProviderService<T> {
  abstract getListItemComponent(): BaseListItem<T>;
}
