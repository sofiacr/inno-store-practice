import { Component } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
  }

  login() {
    this.authService.login();
    console.log('logged in');
    this.router.navigate(['/products']);
  }

  logout() {
    this.authService.logout();
    console.log('logged out');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authService.checkLogged();
  }
}
