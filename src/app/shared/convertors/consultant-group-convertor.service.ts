import {ConvertorInterface} from './convertor-interface';
import {Injectable} from '@angular/core';
import {ConsultantGroup as SwaggerConsultantGroup} from '../api/generated';
import {ConsultantGroup} from '../models/consultant-group.model';

@Injectable()
export class ConsultantGroupConvertorService implements ConvertorInterface<ConsultantGroup, SwaggerConsultantGroup> {
  convertToSwagger = (model: ConsultantGroup): SwaggerConsultantGroup => {
    const modelOut: SwaggerConsultantGroup = {};

    modelOut.conversationTarif = model.conversationTarif;
    modelOut.description = model.description;
    modelOut.id = model.id;
    modelOut.name = model.name;
    modelOut.videoTarif = model.videoTarif;

    return modelOut;
  };

  convertFromSwagger = (model: SwaggerConsultantGroup): ConsultantGroup => {
    const modelOut = new ConsultantGroup();

    modelOut.conversationTarif = model.conversationTarif;
    modelOut.description = model.description;
    modelOut.id = model.id;
    modelOut.name = model.name;
    modelOut.videoTarif = model.videoTarif;

    return modelOut;
  };
}
