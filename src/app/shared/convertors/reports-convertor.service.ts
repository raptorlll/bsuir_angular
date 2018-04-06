import { ConvertorInterface } from './convertor-interface';
import { Injectable } from '@angular/core';
import { SummaryPayments as SwaggerReports } from '../api/generated';
import { Report } from '../models';

@Injectable()
export class ReportsConvertorService implements ConvertorInterface<Report, SwaggerReports> {
  convertToSwagger = (model: Report): SwaggerReports => {
    const modelOut: { [key: string]: any } = {};

    modelOut.date = <Date> model.date;
    modelOut.messageCount = model.messageCount;
    modelOut.paymentsCount = model.paymentsCount;
    modelOut.sum = model.sum;

    return modelOut;
  }

  convertFromSwagger = (model: SwaggerReports): Report => {
    const modelOut = new Report();

    modelOut.date = <Date> model.date;
    modelOut.messageCount = model.messageCount;
    modelOut.paymentsCount = model.paymentsCount;
    modelOut.sum = model.sum;

    return modelOut;
  }
}
