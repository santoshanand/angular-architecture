import { NgModule } from '@angular/core';
import { LandingComponent } from './landing.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/sign-in' },
  { path: 'sign-in', loadChildren: () => import('../sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'sign-up', loadChildren: () => import('../sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    LandingComponent
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
