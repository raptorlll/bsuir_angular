import { ConsultantInfomationConvertorService } from './consultant-information-convertor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserConvertorService } from './user-convertor.service';
import { UserJsonConvertorService } from './user-json-convertor.service';

@NgModule({
  imports: [
    CommonModule
  ], 
  providers: [
    UserConvertorService,
    UserJsonConvertorService,
    ConsultantInfomationConvertorService
  ]
})
export class ConvertorsModule { }
