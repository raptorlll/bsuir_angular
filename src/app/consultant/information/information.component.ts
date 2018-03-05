import { Component, OnInit } from '@angular/core';
import { ConsultantInformationControllerService } from '../../shared/api/generated';
import { ConsultantInfomationConvertorService } from '../../shared/convertors/consultant-information-convertor.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  constructor(
    private dataService: ConsultantInformationControllerService,
    private convertorService: ConsultantInfomationConvertorService

  ) { }

  ngOnInit() {
    this.dataService
      .getItemsUsingGET2()
      .map((a: Array<any>)=>a.map((a)=>this.convertorService.convertFromSwagger(a)))
      .subscribe((a)=>{
        console.log("converted",a);
      })
  }

}
