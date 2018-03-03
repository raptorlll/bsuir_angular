import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const serverPath = environment.api_location;

enum ROUTE_PATH {
  LOGIN = '/oauth/token'
}

@Injectable()
export class ApiCommunicationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;

    // const headers = {
    //  'Content-Type': 'application/x-www-form-urlencoded',
    //  'Authorization': 'Basic ' + btoa('testjwtclientid' + ':' + 'XY7kmzoNzl100')
    // };

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', 'Basic ' + btoa('testjwtclientid' + ':' + 'XY7kmzoNzl100'));

    return this.http.post(serverPath + "ROUTE_PATH.LOGIN", body, { headers })
      .map((res: any)  => res.json())
      .map((res: any) => {
        console.log('DONE');
        if (res.access_token) {
          return res.access_token;
        }
        return null;
      });
  }
}
