import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { username: '', password: '' };
  errorMessage = '';
  loading = false;
  loginSuccess = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.loading = true;
    this.errorMessage = '';
    this.loginSuccess = false;

    this.authService.login(this.loginData.username, this.loginData.password).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.userId.toString());
        localStorage.setItem('userRole', response.role); // Store role
        this.loginSuccess = true;
        this.loading = false;

        // Redirect based on role
        if (response.role === 'employee') {
          this.router.navigate(['/employee/dashboard']); // Employee route
        } else if (response.role === 'manager') {
          this.router.navigate(['/manager/dashboard']);
        } else if (response.role === 'admin') {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.router.navigate(['/']); // Default route if role is unknown
        }
      },
      error: (err) => {
        this.errorMessage = 'Invalid username or password.';
        this.loading = false;
      }
    });
  }
}
