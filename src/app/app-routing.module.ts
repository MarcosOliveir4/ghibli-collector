import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ghibli',
    pathMatch: 'full'
  },
  {
    path: 'ghibli',
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        pathMatch: 'full',
        canActivate: [LoginGuard],
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'authentication',
        pathMatch: 'full',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
