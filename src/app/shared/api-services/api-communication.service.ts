import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { UserControllerService } from '../api/generated';
import { User } from '../models/user.model';
import { UserJsonConvertorService } from '../convertors/user-json-convertor.service';

const serverPath = environment.api_location;

enum ROUTE_PATH {
  LOGIN = '/oauth/token',
  REGISTRATION = '/user/registration'
}

@Injectable() 
export class ApiCommunicationService {

  constructor(
    private http: HttpClient,
    private userControllerService: UserControllerService,
    private userJsonConvertorService: UserJsonConvertorService
  ) { }

  login(username: string, password: string) {
    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;

    // const headers = {
    //  'Content-Type': 'application/x-www-form-urlencoded',
    //  'Authorization': 'Basic ' + btoa('testjwtclientid' + ':' + 'XY7kmzoNzl100')
    // };

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ' + btoa('testjwtclientid' + ':' + 'XY7kmzoNzl100'));

    return (<Observable<any>>this.http.post(serverPath + ROUTE_PATH.LOGIN, body, { headers }))
      .map((res: any)  => res.json())
      .map((res: any) => {
        console.log('DONE');
        if (res.access_token) {
          return res.access_token;
        }
        return null;
      });
  }

  registration(user: User){
  
    return this.userControllerService.registerUserAccountUsingPOST(this.userJsonConvertorService.convertToSwagger(user));
  }
}
