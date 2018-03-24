import {Component, OnInit} from '@angular/core';
import {ConsultantInformation} from '../../../shared/models';
import {BaseListItem} from '../../../shared/components/crud/list-item/base-list-item';
import {FormBuilder, FormGroup} from '@angular/forms';
import {formFieldsGenerator} from '../../../shared/components/generators/formFieldsGenerator';

@Component({
  selector: 'app-view',
  templateUrl: './edit.component.html',
  styles: []
})
export class EditComponent extends BaseListItem<ConsultantInformation> implements OnInit {
  form: FormGroup;
  item: ConsultantInformation;

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.form = this.formBuilder.group(formFieldsGenerator(this.item));
  }
}
