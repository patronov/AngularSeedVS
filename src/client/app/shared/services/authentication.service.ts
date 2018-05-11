import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class AuthenticationService {
    isLoggedIn = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    /** Mock client-side authentication/authorization service */
    getAuthorizationToken() {
        return 'some-auth-token';
    }

    login(): Observable<boolean> {
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
