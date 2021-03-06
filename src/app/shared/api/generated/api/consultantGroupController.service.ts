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
/* tslint:disable:no-unused-variable member-ordering */

import {Inject, Injectable, Optional} from '@angular/core';
import {
  HttpClient, HttpHeaders, HttpParams,
  HttpResponse, HttpEvent
} from '@angular/common/http';
import {CustomHttpUrlEncodingCodec} from '../encoder';

import {Observable} from 'rxjs/Observable';

import {CollectionConsultantGroup} from '../model/collectionConsultantGroup';
import {ConsultantGroup} from '../model/consultantGroup';
import {ResponseEntityConsultantGroup} from '../model/responseEntityConsultantGroup';

import {BASE_PATH, COLLECTION_FORMATS} from '../variables';
import {Configuration} from '../configuration';


@Injectable()
export class ConsultantGroupControllerService {

  protected basePath = 'https://localhost:8086';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (let consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }


  /**
   * deleteItem
   *
   * @param id id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public deleteItemUsingDELETE(id: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseEntityConsultantGroup>;
  public deleteItemUsingDELETE(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseEntityConsultantGroup>>;
  public deleteItemUsingDELETE(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseEntityConsultantGroup>>;
  public deleteItemUsingDELETE(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteItemUsingDELETE.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      '*/*'
    ];
    let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = [
      'application/json'
    ];

    return this.httpClient.delete<ResponseEntityConsultantGroup>(`${this.basePath}/consultant_group/${encodeURIComponent(String(id))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * getItem
   *
   * @param id id
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getItemUsingGET(id: number, observe?: 'body', reportProgress?: boolean): Observable<ConsultantGroup>;
  public getItemUsingGET(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConsultantGroup>>;
  public getItemUsingGET(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConsultantGroup>>;
  public getItemUsingGET(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getItemUsingGET.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      '*/*'
    ];
    let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = [
      'application/json'
    ];

    return this.httpClient.get<ConsultantGroup>(`${this.basePath}/consultant_group/${encodeURIComponent(String(id))}`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * getItems
   *
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getItemsUsingGET(observe?: 'body', reportProgress?: boolean): Observable<CollectionConsultantGroup>;
  public getItemsUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CollectionConsultantGroup>>;
  public getItemsUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CollectionConsultantGroup>>;
  public getItemsUsingGET(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      '*/*'
    ];
    let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = [
      'application/json'
    ];

    return this.httpClient.get<CollectionConsultantGroup>(`${this.basePath}/consultant_group`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * Save availabe items
   *
   * @param information information
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public saveItemUsingPOST(information: ConsultantGroup, observe?: 'body', reportProgress?: boolean): Observable<ConsultantGroup>;
  public saveItemUsingPOST(information: ConsultantGroup, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConsultantGroup>>;
  public saveItemUsingPOST(information: ConsultantGroup, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConsultantGroup>>;
  public saveItemUsingPOST(information: ConsultantGroup, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (information === null || information === undefined) {
      throw new Error('Required parameter information was null or undefined when calling saveItemUsingPOST.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      '*/*'
    ];
    let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = [
      'application/json'
    ];
    let httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<ConsultantGroup>(`${this.basePath}/consultant_group`,
      information,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * updateItem
   *
   * @param id id
   * @param information information
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public updateItemUsingPUT(id: number, information: ConsultantGroup, observe?: 'body', reportProgress?: boolean): Observable<ConsultantGroup>;
  public updateItemUsingPUT(id: number, information: ConsultantGroup, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConsultantGroup>>;
  public updateItemUsingPUT(id: number, information: ConsultantGroup, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConsultantGroup>>;
  public updateItemUsingPUT(id: number, information: ConsultantGroup, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateItemUsingPUT.');
    }
    if (information === null || information === undefined) {
      throw new Error('Required parameter information was null or undefined when calling updateItemUsingPUT.');
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [
      '*/*'
    ];
    let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = [
      'application/json'
    ];
    let httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.put<ConsultantGroup>(`${this.basePath}/consultant_group/${encodeURIComponent(String(id))}`,
      information,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

}
