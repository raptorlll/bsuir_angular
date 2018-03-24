import {Validators} from '@angular/forms';

export const formFieldsGenerator: (item: {[key: string]: any}) => {[key: string]: any} = (item) => {
  const obj: {[key: string]: any} = {};
  Object.keys(item).forEach((key: string) => {
    obj[key] = [
      item[key],
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(128)
      ]
    ];
  });

  return obj;
};
