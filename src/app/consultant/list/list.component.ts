import { Component, OnInit } from '@angular/core';
import { ConsultantInformationSource } from '../../shared/services/data-sources/consultant-information-source';
import { ConsultantInformation } from '../../shared/models';

@Component({
  selector: 'consultant-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: ConsultantInformation[];

  constructor(
    private consultantInformationSource: ConsultantInformationSource
  ) { }

  ngOnInit() {
    this.consultantInformationSource
      .getItems()
      .subscribe((items: ConsultantInformation[]) => {
        console.log("asdasd", items);
        this.items = items;
      });
  }
}
