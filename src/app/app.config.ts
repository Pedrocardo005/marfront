import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './features/home/routes/home/home.component';
import { LoginComponent } from './features/login/routes/login/login.component';
import { RegisterComponent } from './features/register/routes/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
