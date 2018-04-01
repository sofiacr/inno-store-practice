import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './shared/auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate() {
        console.log('AuthGuard#canActivate called');
        return this.checkLogin();
    }

    checkLogin(): boolean {
        if (this.authService.checkLogged()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
