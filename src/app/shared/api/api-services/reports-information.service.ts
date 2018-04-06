import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SummaryPayments as SwaggerReports } from '../generated/index';
import { GenericCrudService } from './generic-crud.service';
import { Report } from '../../models';
import { SummaryPaymentsControllerService } from '../generated/api/summaryPaymentsController.service';
import { ReportsConvertorService } from '../../convertors/reports-convertor.service';

@Injectable()
export class ReportsInformationService extends GenericCrudService<Report, SwaggerReports> {
  constructor(public convertor: ReportsConvertorService,
              private apiService: SummaryPaymentsControllerService) {
    super();
  }

  protected getItemServer = (identifier: number) => <Observable<SwaggerReports>> Observable.of({});
  protected getItemsServer = () => <Observable<SwaggerReports[]>> this.apiService.getReportsUsingGET();
  protected deleteItemServer = (identifier: number) => {
    throw new Error('Can`t delete report manually');
  };
  protected updateItemServer = (identifier: number, model: any) => <Observable<SwaggerReports>> this.apiService.updateItemUsingPUT8(identifier, model);
  protected createItemServer = (model: any) => {
    throw new Error('Can`t create report manually');
  }

  sendReport = () => this.apiService.sendReportsUsingPOST();
}
