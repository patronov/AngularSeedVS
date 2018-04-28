﻿import { Injectable } from '@angular/core';

/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthenticationService {
    getAuthorizationToken() {
        return 'some-auth-token';
    }
}
