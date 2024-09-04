// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common'; // Make sure CommonModule is imported

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule, // Ensure CommonModule is imported here
        HttpClientModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegistrationComponent },
        ]),
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
