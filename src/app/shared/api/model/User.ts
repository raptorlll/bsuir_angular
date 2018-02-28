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

import * as models from './models';

export interface User {
    consultantGroupUsersById?: models.CollectionConsultantGroupUser;

    customerInformationsById?: models.CollectionCustomerInformation;

    email?: string;

    firstName?: string;

    id?: number;

    lastName?: string;

    password?: string;

    roles?: models.CollectionRole;

    token?: string;

    username?: string;

}
