import {ConvertorInterface} from './convertor-interface';
import {Injectable} from '@angular/core';
import {User as SwaggerJson} from '../api/generated';
import {Role, User} from '../models';
import {userRolesList} from '../predefined-lists';
import * as _ from 'lodash';

@Injectable()
export class UserConvertorService implements ConvertorInterface<User, SwaggerJson> {
  convertToSwagger = (model: User): SwaggerJson => {
    const modelOut: SwaggerJson = {};

    modelOut.email = model.email;
    modelOut.firstName = model.firstName;
    modelOut.id = model.id;
    modelOut.lastName = model.lastName;
    modelOut.password = model.password;
    modelOut.roles = model.roles.map((role: Role) => role.roleName);
    modelOut.username = model.username;

    return modelOut;
  };

  convertFromSwagger = (model: SwaggerJson): User => {
    const modelOut: User = new User();

    modelOut.email = model.email;
    modelOut.firstName = model.firstName;
    modelOut.id = model.id;
    modelOut.lastName = model.lastName;
    modelOut.password = model.username;
    modelOut.email = model.password;
    modelOut.roles = (<string[]> model.roles).map((role: string) => _.find(userRolesList, {roleName: role}));
    modelOut.username = model.username;

    return modelOut;
  };
}
