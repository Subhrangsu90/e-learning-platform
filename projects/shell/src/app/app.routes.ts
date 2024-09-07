import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { NotFoundComponent } from './components/error-pages/not-found/not-found.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';

export const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
    title: 'Signup',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    title: 'Login',
  },
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule('landing-page', './Component').then(
        (m) => m.AppComponent
      ),
    data: { showHeader: false },
    title: 'eLearning',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      loadRemoteModule('dashboard', './Component').then((m) => m.AppComponent),
    data: { showHeader: true },
    title: 'Dashboard',
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { showHeader: false },
  },
];
