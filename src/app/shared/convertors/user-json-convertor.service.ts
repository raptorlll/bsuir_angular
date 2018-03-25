import {ConvertorInterface} from './convertor-interface';
import {Injectable} from '@angular/core';
import {UserJson as SwaggerUserJson} from '../api/generated';
import {User, Role} from '../models';
import {userRolesList} from '../predefined-lists';
import * as _ from 'lodash';

@Injectable()
export class UserJsonConvertorService implements ConvertorInterface<User, SwaggerUserJson> {
  convertToSwagger = (model: User): SwaggerUserJson => {
    const modelOut: SwaggerUserJson = {};

    modelOut.email = model.email;
    modelOut.firstName = model.firstName;
    modelOut.id = model.id;
    modelOut.lastName = model.lastName;
    modelOut.password = model.password;
    modelOut.roles = model.roles.map((role: Role) => role.roleName);
    modelOut.username = model.username;

    return modelOut;
  };

  convertFromSwagger = (model: SwaggerUserJson): User => {
    const modelOut: User = new User();

    modelOut.email = model.email;
    modelOut.firstName = model.firstName;
    modelOut.id = model.id;
    modelOut.lastName = model.lastName;
    modelOut.password = model.password;
    modelOut.roles = model.roles.map((role: string) => _.find(userRolesList, {roleName: role}));
    modelOut.username = model.username;

    return modelOut;
  };
}
