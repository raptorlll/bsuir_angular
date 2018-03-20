import {ConvertorInterface} from './convertor-interface';
import {Injectable} from '@angular/core';
import {UserJson as SwaggerUserJson} from '../api/generated';
import {User} from '../models';

@Injectable()
export class UserConvertorService implements ConvertorInterface<User, SwaggerUserJson> {
  convertToSwagger(model: User): SwaggerUserJson {
    throw new Error('Method not implemented.');
  }

  convertFromSwagger(model: SwaggerUserJson): User {
    throw new Error('Method not implemented.');
  }
}
