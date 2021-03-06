/**
 * Spring Boot REST API
 * Spring Boot REST API for Online Store
 *
 * OpenAPI spec version: 1.0
 * Contact: leonpolq@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import {User} from './user';


export interface CustomerInformation {
  additionalInformation?: string;
  birthData?: string;
  id?: number;
  primary?: string;
  user?: User;
}
