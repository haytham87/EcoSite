import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './Layout/app-layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './Layout/app-layout/auth-layout/auth-layout.component';
import { Page404Component } from './pages/authentication/page404/page404.component';
import { Page500Component } from './pages/authentication/page500/page500.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: '',
        loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
      }
    ]
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
