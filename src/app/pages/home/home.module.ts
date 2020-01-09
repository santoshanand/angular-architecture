import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { UiBaseModule } from 'src/app/shared/modules/ui-base/ui-base.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', loadChildren: () => import('../home/modules/dashboard/dashboard.module').then(m => m.DashboardModule) }
];



@NgModule({
  imports: [
    UiBaseModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
