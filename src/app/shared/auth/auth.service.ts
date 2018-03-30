import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    private logged = false;

    constructor() {
    }

    login() {
        this.logged = true;
    }

    logout() {
        this.logged = false;
    }

    checkLogged(): boolean {
        return this.logged;
    }
}
