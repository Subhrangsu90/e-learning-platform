import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/error-pages/not-found/not-found.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: FooterComponent,
  //   pathMatch: 'full',
  // },
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
