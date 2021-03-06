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

import {CollectionConsultantInformation} from '../model/collectionConsultantInformation';
import {ConsultantInformation} from '../model/consultantInformation';
import {ResponseEntityConsultantInformation} from '../model/responseEntityConsultantInformation';

import {BASE_PATH, COLLECTION_FORMATS} from '../variables';
import {Configuration} from '../configuration';


@Injectable()
export class ConsultantInformationControllerService {

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
  public deleteItemUsingDELETE2(id: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseEntityConsultantInformation>;
  public deleteItemUsingDELETE2(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseEntityConsultantInformation>>;
  public deleteItemUsingDELETE2(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseEntityConsultantInformation>>;
  public deleteItemUsingDELETE2(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteItemUsingDELETE2.');
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

    return this.httpClient.delete<ResponseEntityConsultantInformation>(`${this.basePath}/consultant_information/${encodeURIComponent(String(id))}`,
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
  public getItemUsingGET2(id: number, observe?: 'body', reportProgress?: boolean): Observable<ConsultantInformation>;
  public getItemUsingGET2(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConsultantInformation>>;
  public getItemUsingGET2(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConsultantInformation>>;
  public getItemUsingGET2(id: number, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getItemUsingGET2.');
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

    return this.httpClient.get<ConsultantInformation>(`${this.basePath}/consultant_information/${encodeURIComponent(String(id))}`,
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
  public getItemsUsingGET2(observe?: 'body', reportProgress?: boolean): Observable<CollectionConsultantInformation>;
  public getItemsUsingGET2(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CollectionConsultantInformation>>;
  public getItemsUsingGET2(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CollectionConsultantInformation>>;
  public getItemsUsingGET2(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

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

    return this.httpClient.get<CollectionConsultantInformation>(`${this.basePath}/consultant_information`,
      {
        withCredentials: this.configuration.withCredentials,
        headers: headers,
        observe: observe,
        reportProgress: reportProgress
      }
    );
  }

  /**
   * saveClientInformationWithFile
   *
   * @param data data
   * @param file file
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public saveClientInformationWithFileUsingPOST(data: string, file?: Blob, observe?: 'body', reportProgress?: boolean): Observable<ConsultantInformation>;
  public saveClientInformationWithFileUsingPOST(data: string, file?: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConsultantInformation>>;
  public saveClientInformationWithFileUsingPOST(data: string, file?: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConsultantInformation>>;
  public saveClientInformationWithFileUsingPOST(data: string, file?: Blob, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (data === null || data === undefined) {
      throw new Error('Required parameter data was null or undefined when calling saveClientInformationWithFileUsingPOST.');
    }

    let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
    if (data !== undefined) {
      queryParameters = queryParameters.set('data', <any>data);
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
      'multipart/form-data'
    ];

    const canConsumeForm = this.canConsumeForm(consumes);

    let formParams: { append(param: string, value: any): void; };
    let useForm = false;
    let convertFormParamsToString = false;
    // use FormData to transmit files using content-type "multipart/form-data"
    // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
    useForm = canConsumeForm;
    if (useForm) {
      formParams = new FormData();
    } else {
      formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
    }

    if (file !== undefined) {
      formParams = formParams.append('file', <any>file) || formParams;
    }

    return this.httpClient.post<ConsultantInformation>(`${this.basePath}/consultant_information/save`,
      convertFormParamsToString ? formParams.toString() : formParams,
      {
        params: queryParameters,
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
  public saveItemUsingPOST2(information: ConsultantInformation, observe?: 'body', reportProgress?: boolean): Observable<ConsultantInformation>;
  public saveItemUsingPOST2(information: ConsultantInformation, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConsultantInformation>>;
  public saveItemUsingPOST2(information: ConsultantInformation, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConsultantInformation>>;
  public saveItemUsingPOST2(information: ConsultantInformation, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (information === null || information === undefined) {
      throw new Error('Required parameter information was null or undefined when calling saveItemUsingPOST2.');
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

    return this.httpClient.post<ConsultantInformation>(`${this.basePath}/consultant_information`,
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
  public updateItemUsingPUT2(id: number, information: ConsultantInformation, observe?: 'body', reportProgress?: boolean): Observable<ConsultantInformation>;
  public updateItemUsingPUT2(id: number, information: ConsultantInformation, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConsultantInformation>>;
  public updateItemUsingPUT2(id: number, information: ConsultantInformation, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConsultantInformation>>;
  public updateItemUsingPUT2(id: number, information: ConsultantInformation, observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateItemUsingPUT2.');
    }
    if (information === null || information === undefined) {
      throw new Error('Required parameter information was null or undefined when calling updateItemUsingPUT2.');
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

    return this.httpClient.put<ConsultantInformation>(`${this.basePath}/consultant_information/${encodeURIComponent(String(id))}`,
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
