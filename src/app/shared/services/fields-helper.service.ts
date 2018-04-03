import {FormGroup, Validators} from "@angular/forms";
import {GenericId} from "../models";
import * as _ from 'lodash';

export abstract class FieldsHelperService {
  public abstract getFields: () => { [key: string]: string };

  public abstract getLabels: () => { [key: string]: string };

  constructor() {
  }

  formFieldsGenerator: <T extends { [key: string]: any } & GenericId>(item: T) => { [key: string]: any } = (item) => {
    const obj: { [key: string]: any } = {};
    const fields = this.getItemStub(item);

    Object.keys(fields).forEach((key: string) => {
      obj[key] = [
        fields[key],
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(128)
        ]
      ];
    });

    return obj;
  };

  itemFieldsAssign: <T extends GenericId>(item: T, form: FormGroup) => T = (item, form) => {
    const fields = this.getItemStub(item);

    Object.keys(fields).forEach((key: string) => {
      if (!_.result(form, `value.${key}`, false)) {
        return;
      }

      fields[key] = _.result(form, `value.${key}`);
    });

    return fields;
  };


  private getItemStub = itemInner => {
    if (!itemInner.id) {
      return this.getFields();
    } else {
      return itemInner;
    }
  };

  getLabel: (key: string, defaultValue: string) => string = (key, defaultValue = '') => _.result(this.getLabels(), key, defaultValue);

}
