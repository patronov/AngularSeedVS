﻿import { Injectable } from '@angular/core';
import {
    HttpClient, HttpEvent, HttpEventType, HttpProgressEvent,
    HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';

import { of } from 'rxjs/observable/of';
import { catchError, last, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

@Injectable()
export class UploaderService {

    private _apiURL = 'http://localhost:64757/PredictiveModels/upload';

    constructor(
        private http: HttpClient,
        private messenger: MessageService) { }

    // If uploading multiple files, change to:
    // upload(files: FileList) {
    //   const formData = new FormData();
    //   files.forEach(f => formData.append(f.name, f));
    //   new HttpRequest('POST', '/upload/file', formData, {reportProgress: true});
    //   ...
    // }

    upload(files: FileList) {
        if (!files) { return null; }

        // COULD HAVE WRITTEN:
        // return this.http.post('/upload/file', file, {
        //   reportProgress: true,
        //   observe: 'events'
        // }).pipe(

        // Create the request object that POSTs the file to an upload endpoint.
        // The `reportProgress` option tells HttpClient to listen and return
        // XHR progress events.
        const formData = new FormData();
        formData.append(files[0].name, files[0]);
        const req = new HttpRequest('POST', this._apiURL, formData, {
            reportProgress: true
        });


        // The `HttpClient.request` API produces a raw event stream
        // which includes start (sent), progress, and response events.
        return this.http.request(req).pipe(
            map((event: any) => this.getEventMessage(event, files.item(0))),
            tap((message: any) => this.showProgress(message)),
            last(), // return last (completed) message to caller
            catchError(this.handleError(files.item(0)))
        );
    }

    /** Return distinct message for sent, upload progress, & response events */
    private getEventMessage(event: HttpEvent<any>, file: File) {
        switch (event.type) {
            case HttpEventType.Sent:
                return `Uploading file "${file.name}" of size ${file.size}.`;

            case HttpEventType.UploadProgress:
                // Compute and show the % done:
                const percentDone = Math.round(100 * event.loaded / event.total);
                return `File "${file.name}" is ${percentDone}% uploaded.`;

            case HttpEventType.Response:
                return `File "${file.name}" was completely uploaded!`;

            default:
                return `File "${file.name}" surprising upload event: ${event.type}.`;
        }
    }

    /**
     * Returns a function that handles Http upload failures.
     * @param file - File object for file being uploaded
     *
     * When no `UploadInterceptor` and no server,
     * you'll end up here in the error handler.
     */
    private handleError(file: File) {
        const userMessage = `${file.name} upload failed.`;

        return (error: HttpErrorResponse) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            const message = (error.error instanceof Error) ?
                error.error.message :
                `server returned code ${error.status} with body "${error.error}"`;

            this.messenger.add(`${userMessage} ${message}`);

            // Let app keep running but indicate failure.
            return of(userMessage);
        };
    }

    private showProgress(message: string) {
        this.messenger.add(message);
    }
}
