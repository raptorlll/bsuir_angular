import {Injectable} from '@angular/core';
import {ConsultantInformation} from '../../shared/models';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {ConsultantInformationService} from '../../shared/api/api-services/consultant-information.service';

@Injectable()
export class ConsultantResolverService implements Resolve<ConsultantInformation> {
  constructor(private dataService: ConsultantInformationService) {
  }

  resolve(route: ActivatedRouteSnapshot): Promise<ConsultantInformation> {
    return new Promise<ConsultantInformation>((res, rej) => {
      /** New item creation */
      if (!route.paramMap.has('id')) {
        res(new ConsultantInformation());
        return;
      }

      this.dataService.getItem(Number.parseInt(route.paramMap.get('id')))
        .subscribe((a) => {
          res(a);
        });
    });
  }
}
