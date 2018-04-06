import { Role } from './../api/generated/model/role';
import { userRolesList } from '../predefined-lists/user-roles';
import { Injectable } from '@angular/core';
import { CurrentUserService } from './current-user.service';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../objects/menu-item';
import { ResourceControllerService } from '../api/generated';
import * as _ from 'lodash';

@Injectable()
export class NavbarService {
  constructor(private currentUserService: CurrentUserService,
              private resourceControllerService: ResourceControllerService) {
  }

  getMainNavbarService(): Observable<MenuItem[]> {
    return this.resourceControllerService
      .getuserrolesUsingGET()
      .map((roles) => {
        return _.find(userRolesList, {roleName: roles[0]});
      })
      .map((role: Role) => {
        if (role.roleName == 'CONSULTANT') {
          return [
            new MenuItem({name: 'My information', route: ['consultant_information']}),
            new MenuItem({name: 'Conversations', route: ['consultant_conversation']}),
            new MenuItem({name: 'Payments list', route: ['consultant_payments']}),
            new MenuItem({name: 'Payment reports', route: ['consultant_reports']}),
          ];
        } else if (role.roleName == 'CUSTOMER') {
          return [
            new MenuItem({name: 'My information accounts', route: ['customer_information']}),
            new MenuItem({name: 'Conversations', route: ['customer_conversations']}),
            new MenuItem({name: 'Payments list', route: ['customer_payments']}),
            new MenuItem({name: 'Payment reports', route: ['customer_reports']}),
          ];
        } else if (role.roleName == 'ADMIN') {
          return [
            new MenuItem({name: 'Consultant group', route: ['admin_consultant_group']}),
            new MenuItem({name: 'Consultant group user', route: ['admin_consultant_user']}),
            new MenuItem({name: 'Consultant information', route: ['admin_consultant_information']}),
            new MenuItem({name: 'Conversations', route: ['admin_conversations']}),
            new MenuItem({name: 'Conversation message', route: ['admin_message']}),
            new MenuItem({name: 'Customer payment', route: ['admin_payment']}),
          ];
        }
      });
  }
}
