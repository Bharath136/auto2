// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // Include RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
}
