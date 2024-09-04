import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required]], // Adding username field as it's used in onSubmit
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const { username, email, password } = this.registrationForm.value;

      this.http.post('http://localhost:3000/user/signup', { username, email, password })
        .subscribe(
          (response: any) => {
            // Handle successful response, e.g., store token and navigate
            console.log(response);
            localStorage.setItem('token', response.token); // Assuming response includes a token

            this.router.navigate(['/login']);
          },
          (error) => {
            // Handle error response
            console.error('Registration error:', error);
            alert('Registration failed. Please try again.');
          }
        );
    }
  }
}
