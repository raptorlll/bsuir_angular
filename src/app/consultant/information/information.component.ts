import { Component, OnInit, forwardRef } from '@angular/core';
import { ConsultantInformationControllerService } from '../../shared/api/generated';
import { ConsultantInfomationConvertorService } from '../../shared/convertors/consultant-information-convertor.service';
import { GenericCrudService } from '../../shared/api-services/generic-crud.service';
import { ConsultantInformationService } from '../../shared/api-services/consultant-information.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  providers: [
    {
        provide: GenericCrudService,
        useExisting: forwardRef(() => ConsultantInformationService)
    },
  ]
})
export class InformationComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {

  }
}
