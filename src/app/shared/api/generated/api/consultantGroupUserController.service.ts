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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { CollectionConsultantGroupUser } from '../model/collectionConsultantGroupUser';
import { ConsultantGroupUser } from '../model/consultantGroupUser';
import { ResponseEntityConsultantGroupUser } from '../model/responseEntityConsultantGroupUser';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ConsultantGroupUserControllerService {

    protected basePath = 'https://localhost:8086';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
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
    public deleteItemUsingDELETE1(id: number, observe?: 'body', reportProgress?: boolean): Observable<ResponseEntityConsultantGroupUser>;
    public deleteItemUsingDELETE1(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseEntityConsultantGroupUser>>;
    public deleteItemUsingDELETE1(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseEntityConsultantGroupUser>>;
    public deleteItemUsingDELETE1(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteItemUsingDELETE1.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.delete<ResponseEntityConsultantGroupUser>(`${this.basePath}/consultant_group_user/${encodeURIComponent(String(id))}`,
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
    public getItemUsingGET1(id: number, observe?: 'body', reportProgress?: boolean): Observable<ConsultantGroupUser>;
    public getItemUsingGET1(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConsultantGroupUser>>;
    public getItemUsingGET1(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConsultantGroupUser>>;
    public getItemUsingGET1(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getItemUsingGET1.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<ConsultantGroupUser>(`${this.basePath}/consultant_group_user/${encodeURIComponent(String(id))}`,
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
    public getItemsUsingGET1(observe?: 'body', reportProgress?: boolean): Observable<CollectionConsultantGroupUser>;
    public getItemsUsingGET1(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CollectionConsultantGroupUser>>;
    public getItemsUsingGET1(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CollectionConsultantGroupUser>>;
    public getItemsUsingGET1(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<CollectionConsultantGroupUser>(`${this.basePath}/consultant_group_user`,
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
    public saveItemUsingPOST1(information: ConsultantGroupUser, observe?: 'body', reportProgress?: boolean): Observable<ConsultantGroupUser>;
    public saveItemUsingPOST1(information: ConsultantGroupUser, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConsultantGroupUser>>;
    public saveItemUsingPOST1(information: ConsultantGroupUser, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConsultantGroupUser>>;
    public saveItemUsingPOST1(information: ConsultantGroupUser, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (information === null || information === undefined) {
            throw new Error('Required parameter information was null or undefined when calling saveItemUsingPOST1.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<ConsultantGroupUser>(`${this.basePath}/consultant_group_user`,
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
    public updateItemUsingPUT1(id: number, information: ConsultantGroupUser, observe?: 'body', reportProgress?: boolean): Observable<ConsultantGroupUser>;
    public updateItemUsingPUT1(id: number, information: ConsultantGroupUser, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ConsultantGroupUser>>;
    public updateItemUsingPUT1(id: number, information: ConsultantGroupUser, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ConsultantGroupUser>>;
    public updateItemUsingPUT1(id: number, information: ConsultantGroupUser, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateItemUsingPUT1.');
        }
        if (information === null || information === undefined) {
            throw new Error('Required parameter information was null or undefined when calling updateItemUsingPUT1.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.put<ConsultantGroupUser>(`${this.basePath}/consultant_group_user/${encodeURIComponent(String(id))}`,
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
