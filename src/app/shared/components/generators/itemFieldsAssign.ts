import {FormGroup} from '@angular/forms';
import * as _ from 'lodash';
import {GenericId} from '../../models';

/**
 * Assign from form to the item
 * Will handy for a simple text assignation
 */
export const itemFieldsAssign: <T extends GenericId>(item: T, form: FormGroup) => T = (item, form) => {
  Object.keys(item).forEach((key: string) => {
    if (!_.result(form, `value.${key}`, false)) {
      return;
    }

    item[key] = _.result(form, `value.${key}`);
  });

  return item;
};
