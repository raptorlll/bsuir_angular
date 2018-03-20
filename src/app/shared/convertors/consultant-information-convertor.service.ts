import {ConvertorInterface} from './convertor-interface';
import {Injectable} from '@angular/core';
import {UserJson as SwaggerUserJson, ConsultantInformation as SwaggerConsultantInformation, Time} from '../api/generated';
import {User, ConsultantInformation} from '../models';

@Injectable()
export class ConsultantInfomationConvertorService implements ConvertorInterface<ConsultantInformation, SwaggerConsultantInformation> {
  convertToSwagger(model: ConsultantInformation): SwaggerConsultantInformation {
    const modelOut: SwaggerConsultantInformation = {};

    modelOut.availableFrom = <Time> model.availableFrom;
    modelOut.availableUntil = <Time> model.availableUntil;
    modelOut.consultantGroupUser = model.consultantGroupUser;
    modelOut.degree = model.degree;
    modelOut.education = model.education;
    modelOut.id = model.id;
    modelOut.licenseFile = model.licenseFile;
    modelOut.licenseNumber = model.licenseNumber;
    modelOut.licenseUntil = model.licenseUntil;

    return modelOut;
  }

  convertFromSwagger(model: SwaggerConsultantInformation): ConsultantInformation {
    const modelOut = new ConsultantInformation();

    modelOut.availableFrom = <string> model.availableFrom;
    modelOut.availableUntil = <string> model.availableUntil;
    modelOut.consultantGroupUser = model.consultantGroupUser;
    modelOut.degree = model.degree;
    modelOut.education = model.education;
    modelOut.id = model.id;
    modelOut.licenseFile = model.licenseFile;
    modelOut.licenseNumber = model.licenseNumber;
    modelOut.licenseUntil = model.licenseUntil;

    return modelOut;
  }
}
