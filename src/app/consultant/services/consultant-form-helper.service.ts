import {Injectable} from '@angular/core';
import {FieldsHelperService} from "../../shared/services/fields-helper.service";

@Injectable()
export class ConsultantFormHelperService extends FieldsHelperService {
  public getFields = () => {
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
  };

  public getLabels = () => {
    return {
      availableFrom: 'Available From',
      availableUntil: 'Available Until',
      consultantGroupUser: 'Consultant Group User',
      degree: 'Degree',
      education: 'Education',
      id: 'Id',
      licenseFile: 'License File',
      licenseNumber: 'License Number',
      licenseUntil: 'License Until',
    };
  }
}
