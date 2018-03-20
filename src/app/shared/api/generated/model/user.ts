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
import {CollectionConsultantGroupUser} from './collectionConsultantGroupUser';
import {CollectionCustomerInformation} from './collectionCustomerInformation';
import {CollectionRole} from './collectionRole';


export interface User {
  consultantGroupUsersById?: CollectionConsultantGroupUser;
  customerInformationsById?: CollectionCustomerInformation;
  email?: string;
  firstName?: string;
  id?: number;
  lastName?: string;
  password?: string;
  roles?: CollectionRole;
  token?: string;
  username?: string;
}
