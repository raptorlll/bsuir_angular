import { Injectable } from '@angular/core';
import { FieldsHelperService } from '../../shared/services/fields-helper.service';

@Injectable()
export class ReportsFormHelperService extends FieldsHelperService {
  public getFields = () => ({
    date: '',
    messageCount: '',
    paymentsCount: '',
    sum: '',
  })

  public getLabels = () => ({
    date: 'Date',
    messageCount: 'Message Count',
    paymentsCount: 'Payments Count',
    sum: 'Sum',
  })
}
