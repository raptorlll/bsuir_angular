import {Component, EventEmitter, OnInit} from '@angular/core';
import {ConsultantInformation} from '../../../shared/models';
import {BaseListItemEdit} from '../../../shared/components/crud/list-item/base-list-item';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {ConsultantGroupUserService} from '../../../shared/api/api-services/consultant-group-user.service';
import {ConsultantGroupUser} from '../../../shared/models/consultant-group-user.model';
import * as _ from 'lodash';
import {ConsultantInformationService} from '../../../shared/api/api-services/consultant-information.service';
import {Observable} from 'rxjs/Observable';
import {FieldsHelperService} from '../../../shared/services/fields-helper.service';

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
              private consultantInformationService: ConsultantInformationService,
              private fieldsFactoryService: FieldsHelperService) {
    super();
  }

  label = this.fieldsFactoryService.getLabel;

  ngOnInit() {
    this.consultantGroupUserService.getItems()
      .subscribe((consultantGroupUsers: ConsultantGroupUser[]) => {
        this.consultantGroupUsers = consultantGroupUsers;
      });

    this.createForm(this.item);
  }

  saveItem(item: ConsultantInformation, saveItem) {
    if (!!item.id) {
      return this.consultantInformationService.updateItem(item.id, saveItem);
    } else {
      return this.consultantInformationService.createItem(saveItem);
    }
  }

  submit() {
    const saveItem = this.fieldsFactoryService.itemFieldsAssign<ConsultantInformation>(this.item, this.form);
    saveItem.consultantGroupUser = _.find(this.consultantGroupUsers, {id: this.form.value.consultantGroupUser});

    Observable.if(() => !!this.file,
      this.consultantInformationService
        .updateItemWithFile(saveItem, this.file)
        .do((savedElement: ConsultantInformation) => {
          if (!this.item.id) {
            this.consultantInformationService.addToItems(savedElement);
          }
        }),
      this.saveItem(this.item, saveItem)
    )
      .subscribe((data: ConsultantInformation) => {
        this.item = data;
        this.createForm(this.item);
        /** Trigger event up*/
        this.savedEvent.emit(data);
      });
  }

  createForm(item) {
    const controlsConfig = this.fieldsFactoryService.formFieldsGenerator(item);

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

      reader.onload = (eventInner: any) => {
        this.url = eventInner.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
