import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],  // Adjust this if username is not email
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.http.post('https://dev-cc.automateazy.com/api/v1/users/auth', { username, password })
        .subscribe(
          (response: any) => {
            // Handle successful login
            console.log(response);

            // Assuming response contains a token
            localStorage.setItem('token', response.token);  // Adjust this based on actual response field

            this.router.navigate(['/']);
          },
          (error) => {
            // Handle error response
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
          }
        );
    }
  }
}
