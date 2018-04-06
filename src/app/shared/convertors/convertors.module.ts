import { ConsultantInfomationConvertorService } from './consultant-information-convertor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserConvertorService } from './user-convertor.service';
import { UserJsonConvertorService } from './user-json-convertor.service';
import { ConsultantGroupConvertorService } from './consultant-group-convertor.service';
import { ConsultantGroupUserConvertorService } from './consultant-group-user-convertor.service';
import { ReportsConvertorService } from './reports-convertor.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    UserConvertorService,
    UserJsonConvertorService,
    ConsultantInfomationConvertorService,
    ConsultantGroupConvertorService,
    ConsultantGroupUserConvertorService,
    ReportsConvertorService,
  ],
})
export class ConvertorsModule {
}
