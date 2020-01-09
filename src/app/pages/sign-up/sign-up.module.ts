import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { Routes, RouterModule } from '@angular/router';
import { UiBaseModule } from 'src/app/shared/modules/ui-base/ui-base.module';
const routes: Routes = [
  { path: '', component: SignUpComponent }
];

@NgModule({
  imports: [
    UiBaseModule,
    RouterModule.forChild(routes),
  ],
  declarations: [SignUpComponent]
})
export class SignUpModule { }
