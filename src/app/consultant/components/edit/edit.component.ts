import {Component, EventEmitter, OnInit} from '@angular/core';
import {ConsultantInformation} from '../../../shared/models';
import {BaseListItemEdit} from '../../../shared/components/crud/list-item/base-list-item';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {formFieldsGenerator} from '../../../shared/components/generators/formFieldsGenerator';
import {environment} from '../../../../environments/environment';
import {ConsultantGroupUserService} from '../../../shared/api/api-services/consultant-group-user.service';
import {ConsultantGroupUser} from '../../../shared/models/consultant-group-user.model';
import * as _ from 'lodash';
import {itemFieldsAssign} from '../../../shared/components/generators/itemFieldsAssign';
import {ConsultantInformationService} from '../../../shared/api/api-services/consultant-information.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {Page} from '../../../shared/components/generators/crudPage';

@Component({
  selector: 'app-view',
  templateUrl: './edit.component.html',
  styles: [`
    img.preview {
      max-height: 75px;
      max-width: 75px;
    }
  `]
})
export class EditComponent extends BaseListItemEdit<ConsultantInformation> implements OnInit {
  form: FormGroup;
  item: ConsultantInformation;
  url: string;
  consultantGroupUsers: ConsultantGroupUser[];
  file: File;
  savedEvent: EventEmitter<ConsultantInformation> = new EventEmitter<ConsultantInformation>();

  constructor(private formBuilder: FormBuilder,
              private consultantGroupUserService: ConsultantGroupUserService,
              private consultantInformationService: ConsultantInformationService) {
    super();
  }

  ngOnInit() {
    this.consultantGroupUserService.getItems()
      .subscribe((consultantGroupUsers: ConsultantGroupUser[]) => {
        this.consultantGroupUsers = consultantGroupUsers;
      });

    this.createForm(this.item);
  }

  submit() {
    const saveItem = itemFieldsAssign<ConsultantInformation>(_.cloneDeep(this.item), this.form);
    saveItem.consultantGroupUser = _.find(this.consultantGroupUsers, {id: this.form.value.consultantGroupUser});

    Observable.if(() => !!this.file,
      this.consultantInformationService
        .updateItemWithFile(saveItem, this.file),
      this.consultantInformationService
        .updateItem(this.item.id, saveItem)
    )
      .subscribe((data: ConsultantInformation) => {
        this.item = data;
        this.createForm(this.item);
        /** Trigger event up*/
        this.savedEvent.emit(data);
      });
  }

  createForm(item) {
    const getItemStub = item => {
      if (!item.id) {
        return {
          availableFrom: '',
          availableUntil: '',
          consultantGroupUser: '',
          degree: '',
          education: '',
          id: '',
          licenseFile: '',
          licenseNumber: '',
          licenseUntil: '',
        };
      } else {
        return item;
      }
    };

    const controlsConfig = formFieldsGenerator(getItemStub(item));
    controlsConfig['consultantGroupUser'] = [
      _.result(this, 'item.consultantGroupUser.id', ''),
      [
        Validators.required
      ]
    ];

    this.form = this.formBuilder.group(controlsConfig);
    this.url = `${environment.api_location}/assets/${this.item.licenseFile}`;
  }

  onFileInput(event: any) {
    if (event.target.files && event.target.files[0]) {
      /** Store file here */
      this.file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
