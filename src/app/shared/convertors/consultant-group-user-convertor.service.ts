import {ConvertorInterface} from './convertor-interface';
import {Injectable} from '@angular/core';
import {UserJson as SwaggerUserJson, ConsultantGroupUser as SwaggerConsultantGroupUser, Time} from '../api/generated';
import {ConsultantGroupUser} from '../models/consultant-group-user.model';
import {UserConvertorService} from './user-convertor.service';
import {ConsultantGroupConvertorService} from './consultant-group-convertor.service';
import * as _ from 'lodash';

@Injectable()
export class ConsultantGroupUserConvertorService implements ConvertorInterface<ConsultantGroupUser, SwaggerConsultantGroupUser> {
  constructor(private userConvertorService: UserConvertorService,
              private consultantGroupConvertorService: ConsultantGroupConvertorService) {
  }

  convertToSwagger = (model: ConsultantGroupUser): SwaggerConsultantGroupUser => {
    const modelOut: SwaggerConsultantGroupUser = {};

    modelOut.consultantGroup = model.consultantGroup;
    modelOut.conversationTarif = model.conversationTarif;
    modelOut.status = model.status;
    modelOut.user = model.user;
    modelOut.videoTarif = model.videoTarif;
    modelOut.id = model.id;

    return modelOut;
  };

  convertFromSwagger = (model: SwaggerConsultantGroupUser): ConsultantGroupUser => {
    const modelOut = new ConsultantGroupUser();

    if (_.result(model, 'consultantGroup', false)) {
      modelOut.consultantGroup = this.consultantGroupConvertorService.convertFromSwagger(model.consultantGroup);
    }

    modelOut.conversationTarif = model.conversationTarif;
    modelOut.status = model.status;
    modelOut.user = this.userConvertorService.convertFromSwagger(model.user);
    modelOut.videoTarif = model.videoTarif;
    modelOut.id = model.id;

    return modelOut;
  };
}
