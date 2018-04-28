import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
//import { catchError, map, tap } from 'rxjs/operators';

import { PredictiveModelDTO } from './dtos/predictive-model.dto';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};


@Injectable()
export class PredictiveModelService implements OnInit {

    public predictiveModels: Array<PredictiveModelDTO> = [];

    private _apiURL = 'http://localhost:64757/PredictiveModels/';
    //private _standardOptions: RequestOptions;


    constructor(private http: HttpClient) {
        //let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        //this._standardOptions = new RequestOptions({
        //    headers: headers,
        //    withCredentials: true,
        //});
    }

    ngOnInit() {
        //
    }

    public getAllModels(): Observable<PredictiveModelDTO[]> {
        return this.http.get<PredictiveModelDTO[]>(`${this._apiURL}/all/`, httpOptions)
            .pipe(retry(3), catchError(this.handleError));
        //.map((response: any) => { console.log(response); return response.json(); });
    }

    public postModel(dto: PredictiveModelDTO): Observable<PredictiveModelDTO> {
        const body = JSON.stringify(dto);
        return this.http.post<PredictiveModelDTO>(`${this._apiURL}/`, body, httpOptions)
            .pipe(catchError(this.handleError));
    }

    public updateModels(dto: PredictiveModelDTO): Observable<PredictiveModelDTO> {
        const body = JSON.stringify(dto);
        return this.http.put<PredictiveModelDTO>(`${this._apiURL}/`, body, httpOptions)
            .pipe(catchError(this.handleError));
    }

    public deleteModels(id: number): Observable<boolean> {
        return this.http.delete<boolean>(`${this._apiURL}/${id}/`, httpOptions)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable(
            'Something bad happened; please try again later.');
    }
}
