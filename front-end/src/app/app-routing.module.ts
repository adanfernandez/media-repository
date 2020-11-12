import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonUrls } from './shared/common-urls';

const routes: Routes = [
  {
    path: CommonUrls.NONE,
    redirectTo: CommonUrls.LOGIN,
    pathMatch: 'full',
  },
  {
      path: CommonUrls.LOGIN,
      loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
  },
  {
      path: 'register',
      loadChildren: () => import('./register/register.module').then(module => module.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }